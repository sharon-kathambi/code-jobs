# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

job1 = Job.create( name: 'Senior FrontEnd Developer', level: "Senior", location: "USA Only", salary: "100k - 150k", featured:true, languages: ["HTML", "CSS", "JavaScript"], contract: "Full-Time")
job2 = Job.create( name: 'FullStack Developer', level: "Intern", location: "Remote", salary: "10k", featured:true, languages: ["HTML", "CSS", "JavaScript", "Ruby"], contract: "Internship")
job3 = Job.create( name: 'Junior FrontEnd Developer', level: "Junior", location: "Kenya", salary: "35k - 40k", featured:true, languages: ["HTML", "CSS", "JavaScript", "React"], contract: "Full-Time")
job4 = Job.create( name: 'Software Engineer', level: "Mid", location: "USA & UK", salary: "100k - 150k", featured:true, languages: ["Python", "Java", "MongoDB"], contract: "Full-Time")
job5 = Job.create( name: 'Senior Backend Developer', level: "Senior", location: "EMEA", salary: "150k - 180k", featured:true, languages: ["Ruby", "Python", "SQL", "AWS"], contract: "Full-Time")

company1 = Company.create(name: 'Photosnap', website: 'https://photosnap.com.au/', logo: 'https://start.nero.com/img/appicons/Nero%20PhotoSnap.svg', employees: '50-100 employees', mission: 'Photosnap custom design and manufacture Australia most innovative, top-quality photo booths available for sale both here in Australia and overseas. Based in WA with branches all over Australia our experienced team oversee the manufacturing process from software design to building and customisation producing a top quality product enjoyed by our clients and customers across the country.', technologies:['Javascript', 'Web development'])
company2= Company.create(name: 'FaceIT', website: 'https://www.faceit.com/en', logo: 'https://www.faceitglobalsummit.com/wp-content/uploads/faceit-logo-bright.png', employees: '100-120 employees', mission: 'Your competitive gaming platform.Play with over 22 million gamers in leagues, tournaments and ladders', technologies:['Gaming', 'C++'])
company3 = Company.create(name: 'Manage', website: 'https://www.managecompany.co.nz/', logo: 'https://images-platform.99static.com/oxpW_54E_V_05oyYv3hutktUgs4=/500x500/top/smart/99designs-contests-attachments/42/42856/attachment_42856924',employees: '30-40 employees', mission:"We get it, running a business is tough enough - you are busy, and you do not have the time to keep up with the intricacies of the ever-changing landscape of Government compliance. It can be confusing, overwhelming and perhaps intimidating at times. This is where we can help - we are New Zealand risk management experts. We specialise in Government compliance such as COVID, ACC and Worksafe, and our main motivation is to ensure businesses are treated fairly and equitably.", technologies: ["analysis", "computing"])

Rectruiter.create(name: 'Irene Jane', image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png', company_id: company1.id, job_id: job1.id)
Rectruiter.create(name: 'Irene Jane', image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png', company_id: company1.id, job_id: job3.id)

Rectruiter.create(name: 'Paul Peter', image: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg', company_id: company2.id, job_id: job2.id)
Rectruiter.create(name: 'Paul Peter', image: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg', company_id: company2.id, job_id: job5.id)

Rectruiter.create(name: 'Dave Collins', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvapOOKTYbJNRayZFsm-7FFJG5_MOVnrfWQ&usqp=CAU', company_id: company3.id, job_id: job3.id)
Rectruiter.create(name: 'Dave Collins', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvapOOKTYbJNRayZFsm-7FFJG5_MOVnrfWQ&usqp=CAU', company_id: company3.id, job_id: job4.id)

puts "Done"