-- ============================================================
-- PASO 1: Agregar columnas faltantes a la tabla projects
-- PASO 2: Activar RLS + policies
-- ============================================================

-- 1. Agregar columnas nuevas
ALTER TABLE projects
  ADD COLUMN IF NOT EXISTS order_index INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS category TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'produccion',
  ADD COLUMN IF NOT EXISTS year TEXT DEFAULT '';

-- 2. Normalizar datos existentes (opcional si ya tenías registros)
UPDATE projects SET order_index = 0 WHERE order_index IS NULL;
UPDATE projects SET category = '' WHERE category IS NULL;
UPDATE projects SET status = 'produccion' WHERE status IS NULL;
UPDATE projects SET year = '' WHERE year IS NULL;

-- 3. Activar RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 4. Eliminar policies previas por si acaso (para recrear limpias)
DROP POLICY IF EXISTS "Allow public read" ON projects;
DROP POLICY IF EXISTS "Allow authenticated all" ON projects;

-- 5. Policy: lectura pública (cualquiera puede ver proyectos)
CREATE POLICY "Allow public read" ON projects
  FOR SELECT
  USING (true);

-- 6. Policy: CRUD solo para usuarios autenticados
CREATE POLICY "Allow authenticated all" ON projects
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 7. Bucket storage (ejecutar en SQL editor de Supabase si no existe)
--    Esto es más fácil desde UI, pero por SQL:
-- INSERT INTO storage.buckets (id, name, public) 
-- VALUES ('portfolio', 'portfolio', true)
-- ON CONFLICT (id) DO NOTHING;

-- 8. Policy para el bucket (permitir subida a autenticados)
DROP POLICY IF EXISTS "Allow authenticated upload" ON storage.objects;
CREATE POLICY "Allow authenticated upload" ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'portfolio'
    AND auth.role() = 'authenticated'
  );

DROP POLICY IF EXISTS "Allow public read storage" ON storage.objects;
CREATE POLICY "Allow public read storage" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'portfolio');

DROP POLICY IF EXISTS "Allow authenticated delete storage" ON storage.objects;
CREATE POLICY "Allow authenticated delete storage" ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'portfolio'
    AND auth.role() = 'authenticated'
  );
