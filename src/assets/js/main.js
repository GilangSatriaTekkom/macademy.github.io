let elements = document.getElementsByTagName("header");
if (elements.length > 0) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let opacity = 0;
        let fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            element.style.opacity = opacity;
            opacity += 0.01;
        }, 10);
    }
} else {
    console.error('No <header> elements found.');
}



function h1Animation () {
    let h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach((h1, index) => {
        // Set initial style
        h1.style.transform = 'translateY(0.5rem)';
        h1.style.opacity = 0;
        h1.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

        // Apply the animation with increasing delay based on index
        setTimeout(() => {
            h1.style.transform = 'translateY(0)';
            h1.style.opacity = 1;
        }, index * 200); // Jeda waktu bertambah 200ms untuk setiap elemen
    });
}

document.addEventListener('DOMContentLoaded', h1Animation);



window.addEventListener('scroll', function () {
    const navbar = document.getElementById('header');
    if (window.scrollY > 0) {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'white';
      navbar.classList.add ('z-50');
    } else {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'transparent';
      navbar.classList.remove ('z-50');
    }
  });
  
  function Menu(e) {
    let list = document.querySelector('ul');
        
    e.name === 'menu' ? (e.name = "close", list.classList.add('top=[80px]'),
      list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top[80px]'), list.classList.remove('opacity-100%'))
  
  };

// Hamburger Menu 
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('navbar-hamburger');
    const navMobile = document.getElementById('nav-mobile');
    if (menu.style.top === '65px') {
      menu.style.top = '-180%';
      navMobile.classList.remove('mobile:bg-white');
      hamburgerIcon.classList.remove('open');
  } else {
      menu.style.top = '65px';
      hamburgerIcon.classList.add('open');
      navMobile.classList.add('mobile:bg-white');
  }
  });
  // Hamburger menu end 
  
  const menuItems = document.querySelectorAll('.navbar-hamburger ul li');
  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          menuItems.forEach(i => i.classList.remove('bg-blue'));
          this.classList.add('bg-');
      });
  });

  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const icon = dropdown.querySelector('.icon');
    const content = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function () {
        if (content.classList.contains('hidden')) {
            content.classList.remove('fade-out');
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
        } else {
            content.classList.add('fade-out');
            icon.classList.remove('rotate-180');
            // Tunggu animasi fade-out selesai sebelum menyembunyikan elemen
            setTimeout(function () {
                content.classList.add('hidden');
                content.classList.remove('fade-out');
            }, 300); // Sesuaikan durasi timeout sesuai dengan durasi animasi
        }
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            if (!content.classList.contains('hidden')) {
                content.classList.add('fade-out');
                icon.classList.remove('rotate-180');
                setTimeout(function () {
                    content.classList.add('hidden');
                    content.classList.remove('fade-out');
                }, 300);
            }
        }
    });
});

document.querySelectorAll('.p-testimonial').forEach((element, index) => {
    const delay = 10 * index; // Jeda 10ms per elemen
    element.style.animationDelay = `${delay}ms`;
});

document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk meng-handle perubahan visibility section
    const callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Tambah kelas 'show' jika elemen terlihat

                // Hentikan observer untuk elemen ini karena animasi hanya perlu terjadi sekali
                observer.unobserve(entry.target);
            }
        });
    };

    // Atur options untuk observer (threshold 0.1 berarti 10% dari section harus terlihat)
    const options = {
        threshold: 0.1
    };

    // Buat observer
    const observer = new IntersectionObserver(callback, options);

    // Mengambil semua elemen section dan mengamati mereka
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});


// Animasi paragrapgh testimonial
document.querySelectorAll('.p-testimonial').forEach((element, index) => {
    const delay = 10 * index; // Jeda 10ms per elemen
    element.style.animationDelay = `${delay}ms`;
});

function CardbgSwitch () {
    const courseCard = document.getElementById('course-card');
    courseCard.style.backgroundimage = image[index];
    currentIndex = (currentIndex + 1) % keys.length;

}


// Window onbeforeunload harus selalu paling bawah
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//     h1Animation ();
//   }


