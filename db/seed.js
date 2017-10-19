const Campus = require('./models/campus');
const Student = require('./models/students');
const db = require('./');

const campuses = [{
  name: 'Uranus',
  image: 'http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/9399660.png?220'
},
{
  name: 'Mars',
  image: 'http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/5133215.png?213'
},
{
  name: 'Jupiter',
  image: 'http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/4987312.png?207'
}]

const students = [{
  name: 'Ashi',
  email: 'ashi@ashi.io',
  image: 'https://cloud.fullstackacademy.com/ashi.jpg?mtime=20160613103128',
  campusId: 4
},
{
  name: 'Emily',
  email: 'emily@ylime.com',
  image: 'https://pbs.twimg.com/profile_images/703752189332889601/qHrbU_gg.jpg',
  campusId: 4
},
{
  name: 'Karen',
  email: 'karen@foundations.com',
  image: 'https://cloud.fullstackacademy.com/Karen-M.jpg?mtime=20160511113353',
  campusId: 5
}]

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ))

  const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();