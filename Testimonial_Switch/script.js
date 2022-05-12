const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Jessica Jenner",
    position: "Artist",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, delectus recusandae nihil sunt laboriosam mollitia eum animi praesentium aut eius et labore quia ducimus rerum vel eaque asperiores voluptatum esse. Ratione labore nesciunt porro harum voluptate perferendis nostrum, excepturi totam? Nesciunt cum veritatis molestias aut minus commodi, earum nam debitis quia tempore odit iusto assumenda ipsam hic? Iure voluptates quaerat odio assumenda quidem, maiores voluptatibus atque accusamus libero voluptatum ratione veniam dolores voluptate.",
  },
  {
    name: "Kyle Smith",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, dolor numquam magni blanditiis voluptates non. In, voluptatum alias minima tempora dolores provident nam ut non quibusdam cupiditate eius fugit, quidem consectetur quasi voluptates. Amet odit iste tempora illum nisi ab sequi laboriosam, dolores fuga exercitationem quo distinctio quis eius! Explicabo, obcaecati suscipit quo amet, ex quia magni porro a commodi accusamus, reprehenderit nostrum similique modi dignissimos rerum impedit deleniti tempore.",
  },
  {
    name: "Amenda Ria",
    position: "Content Writer",
    photo: "https://randomuser.me/api/portraits/women/13.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus quam, rem soluta officia nesciunt debitis incidunt cumque facilis aut, modi corporis, enim consequuntur voluptatibus quibusdam molestiae quod suscipit numquam illo. Ducimus error sed labore quae perspiciatis, porro neque unde odit reprehenderit recusandae pariatur iusto dicta, blanditiis necessitatibus dolorem temporibus magni voluptate velit nobis harum, optio voluptates quidem. Harum optio recusandae iure fuga rerum, commodi non voluptatibus, dolorem odio suscipit beatae aperiam eius laudantium necessitatibus quia?",
  },
  {
    name: "Aliya Riaz",
    position: "Cricketer",
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem alias iusto accusamus sapiente ab illo natus, impedit sint laudantium provident quidem quae architecto ipsum unde voluptatem temporibus placeat voluptas nisi! Distinctio qui laborum labore, quidem ut omnis nihil. Ut, sed! Veniam ex quia inventore, cum architecto sed iure consequuntur mollitia! Ab beatae obcaecati at! Alias veniam fugit molestias reiciendis, cupiditate nisi dolor ex natus porro praesentium, dolore, id soluta commodi? Fuga, explicabo. Dicta animi impedit laboriosam cumque ipsam maxime quaerat soluta.",
  },
];

let idx = 0;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);
