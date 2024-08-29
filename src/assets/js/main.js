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

  


// Animasi paragrapgh testimonial
document.querySelectorAll('.p-testimonial').forEach((element, index) => {
    const delay = 10 * index; // Jeda 10ms per elemen
    element.style.animationDelay = `${delay}ms`;
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: [0.1]  // 10% dari elemen terlihat
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });

// _____________RANDOM CHANGE BG________________
// Menyimpan original class dari masing-masing elemen
const originalClasses = {
  bgCard1: 'bg-book',
  bgCard2: 'bg-img1',
  bgCard3: 'bg-img2',
};

let intervalId;

// Fungsi untuk memulai perubahan class secara acak saat hover
function startRandomChange(elementId) {
  const div = document.getElementById(elementId);
  const imgClasses = ['bg-img1', 'bg-img2', 'bg-img3', 'bg-img4', 'bg-book'];

  // Menyimpan class awal sebelum diubah
  const originalClass = originalClasses[elementId];

  // Mulai interval untuk mengubah class secara acak setiap 3000ms (3 detik)
  intervalId = setInterval(() => {
    // Hapus semua class img dari div
    imgClasses.forEach(cls => div.classList.remove(cls));

    // Pilih class secara acak
    const randomClass = imgClasses[Math.floor(Math.random() * imgClasses.length)];
    div.classList.add(randomClass);
  }, 3000); // Delay 3000ms (3 detik)

  // Fungsi untuk menghentikan perubahan dan mengembalikan class ke yang semula
  function stopRandomChange() {
    clearInterval(intervalId);

    // Hapus semua class img dari div
    imgClasses.forEach(cls => div.classList.remove(cls));

    // Tambahkan kembali class awal
    div.classList.add(originalClass);
  }

  // Event listener untuk mouse leave
  div.addEventListener('mouseleave', stopRandomChange, { once: true });
}

// Menambahkan event listener hover ke setiap elemen
document.getElementById('bgCard1').addEventListener('mouseenter', () => startRandomChange('bgCard1'));
document.getElementById('bgCard2').addEventListener('mouseenter', () => startRandomChange('bgCard2'));
document.getElementById('bgCard3').addEventListener('mouseenter', () => startRandomChange('bgCard3'));


// _____________RANDOM CHANGE BG________________



// Window onbeforeunload harus selalu paling bawah
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


