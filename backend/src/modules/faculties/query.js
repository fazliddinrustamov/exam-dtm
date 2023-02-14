const GETALL = `
  select 
    f.*,
    (select region_name from regions where region_id = (select region_id from universities where university_id = f.university_id)),
    (select university_name from universities where university_id = f.university_id)
    from faculties as f where  case  when $1 > 0 then faculty_id = $1
  else true
  end
`

module.exports = {
  GETALL
} 
