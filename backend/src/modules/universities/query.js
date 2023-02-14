const GETALL = `
  select u.*, json_agg(f.*) as faculties from faculties as f left join universities as u 
  on u.university_id = f.university_id 
  where case  when $1 > 0 and $2 > 0 then f.first_subject = $1 and f.second_subject = $2
  else true
  end 
  group by u.university_id
  ORDER BY u.university_id  
`

module.exports = {
  GETALL
} 
