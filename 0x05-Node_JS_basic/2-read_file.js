const file = require('fs');
function countStudents(path){
	file.exists(path, (r)=>{
		if (r){
			file.readFile(path, (r, contents)=>{
				var content = contents.toString();
				var array = content.split('\n');
				number_of_students = array.length - 1;
				field_list = []
				array.forEach((line)=>{
					if (line.length > 0){
						fields = line.split(',');
						field_list.push(fields[3])
					}
				})
				sorted_field_list = field_list.sort();
				country_count = {}
				unduplicated_field_list = []
				sorted_field_list.forEach((a)=>{
					if (country_count[a]){
						country_count[a] += 1;
					}else{
						if (a != 'field'){
						unduplicated_field_list.push(a);
						country_count[a] = 1;
						}
					}
				})
				console.log('Number of students: %d', number_of_students);
				unduplicated_field_list.forEach((field)=>{
					console.log();
				})
				
			})
		}else{
			throw Error('Cannot load the database');
		}
	});
}
module.exports = countStudents;
