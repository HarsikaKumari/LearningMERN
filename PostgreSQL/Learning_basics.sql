
-- to show the data
SELECT * FROM public.capitals
ORDER BY id ASC 

-- creating table
Create Table flags (
  id Serial primary key,
  name text,
  flags text
);