// Burger-menu
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {
    this.classList.toggle("active");
    headerMenu.classList.toggle("open");
});

// Modal&Notification

const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalSubmit = document.querySelector(".modal__form-btn");

const notification = document.querySelector(".notification");
const notificationClose = document.querySelector(".notification__close");

btn.forEach((item) => {
    item.addEventListener("click", () => {
        modal.classList.add("modal__show");
        document.body.style.overflow = "hidden";
        modalClose.addEventListener("click", () => closeModal());
        modalSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal();
            notification.classList.add("notification__active");
            notificationClose.addEventListener("click", () =>
                closeNotification()
            );
        });
    });
});

function closeModal() {
    modal.classList.remove("modal__show");
    document.body.style.overflow = "auto";
}

function closeNotification() {
    notification.classList.remove("notification__active");
}


// Order button

const orderMeeting = document.querySelector('.meeting__order-btn');

orderMeeting.addEventListener('click', () =>{
    notification.classList.add("notification__active");
    notificationClose.addEventListener("click", () =>
        closeNotification()
    );
})
