const GETALL = `
  select * from subjects as c
  where case  when $1 > 0 then c.subject_id = $1
  else true
  end
`
module.exports = {
  GETALL
} 
