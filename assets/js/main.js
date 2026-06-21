document.addEventListener('DOMContentLoaded', () => {
    
    
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggleBtn) themeToggleBtn.innerText = '☀️ Sáng';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = 'light';
            
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
                themeToggleBtn.innerText = '☀️ Sáng';
            } else {
                themeToggleBtn.innerText = '🌙 Tối';
            }
            
            localStorage.setItem('theme', theme);
        });
    }

    
    const courseGrid = document.getElementById('courseGrid');
    if (courseGrid) {
        renderCourses(courses);
        
        document.getElementById('searchInput').addEventListener('input', filterData);
        document.getElementById('categoryFilter').addEventListener('change', filterData);
        document.getElementById('levelFilter').addEventListener('change', filterData);

        // Nút đăng ký trong modal
        document.getElementById('btnModalRegister').addEventListener('click', () => {
            const courseId = document.getElementById('btnModalRegister').getAttribute('data-course-id');
            window.location.href = `register.html?courseId=${courseId}`;
        });
    }

    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        populateCourseSelect();
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('courseId');
        if (courseId) {
            document.getElementById('regCourse').value = courseId;
        }

        registerForm.addEventListener('submit', handleRegistration);
    }

    const tableBody = document.getElementById('registrationTableBody');
    if (tableBody) {
        renderRegistrations();
    }
});

function renderCourses(data) {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = '';
    
    if (data.length === 0) {
        grid.innerHTML = '<div class="col-12"><p class="text-center">Không tìm thấy kết quả phù hợp.</p></div>';
        return;
    }

    data.forEach(course => {
        const html = `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card course-card h-100">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}" onerror="this.src='https://via.placeholder.com/300x180?text=No+Image'">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="mb-2">
                            <span class="badge bg-info text-dark">${course.category}</span>
                            <span class="badge bg-secondary">${course.level}</span>
                        </p>
                        <p class="card-text flex-grow-1">${course.description}</p>
                        <div class="mt-auto d-flex gap-2">
                            <button class="btn btn-outline-primary btn-sm flex-fill" onclick="openModal(${course.id})">Chi tiết</button>
                            <a href="register.html?courseId=${course.id}" class="btn btn-primary btn-sm flex-fill">Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += html;
    });
}

function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;

    const filtered = courses.filter(c => {
        const matchName = c.title.toLowerCase().includes(searchText);
        const matchCat = category === "" || c.category === category;
        const matchLevel = level === "" || c.level === level;
        return matchName && matchCat && matchLevel;
    });

    renderCourses(filtered);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('levelFilter').value = '';
    renderCourses(courses);
}

function openModal(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    document.getElementById('modalTitle').innerText = course.title;
    document.getElementById('modalImage').src = course.image;
    document.getElementById('modalCategory').innerText = course.category;
    document.getElementById('modalLevel').innerText = course.level;
    document.getElementById('modalDate').innerText = course.date;
    document.getElementById('modalDesc').innerText = course.description;
    document.getElementById('modalDetail').innerText = course.detail;
    
    // Gắn ID vào nút đăng ký trong modal
    document.getElementById('btnModalRegister').setAttribute('data-course-id', id);

    const courseModal = new bootstrap.Modal(document.getElementById('courseDetailModal'));
    courseModal.show();
}

function populateCourseSelect() {
    const select = document.getElementById('regCourse');
    select.innerHTML = '<option value="">-- Chọn khóa học --</option>';
    courses.forEach(c => {
        select.innerHTML += `<option value="${c.id}">${c.title}</option>`;
    });
}

function handleRegistration(e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('regName');
    const email = document.getElementById('regEmail');
    const phone = document.getElementById('regPhone');
    const className = document.getElementById('regClass');
    const courseId = document.getElementById('regCourse');
    const note = document.getElementById('regNote').value;

    const checkValid = (input, condition) => {
        if (condition) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            isValid = false;
        }
    };

    checkValid(name, name.value.trim().length >= 3);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    checkValid(email, emailRegex.test(email.value.trim()));
    const phoneRegex = /^\d{9,11}$/;
    checkValid(phone, phoneRegex.test(phone.value.trim()));
    checkValid(className, className.value.trim().length > 0);
    checkValid(courseId, courseId.value !== "");

    if (isValid) {
        const selectedCourseTitle = courses.find(c => c.id == courseId.value).title;
        const newReg = {
            id: Date.now(),
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            className: className.value.trim(),
            courseTitle: selectedCourseTitle,
            note: note.trim()
        };

        const existingRegs = JSON.parse(localStorage.getItem('registrations')) || [];
        existingRegs.push(newReg);
        localStorage.setItem('registrations', JSON.stringify(existingRegs));

        alert("Đăng ký thành công!");
        window.location.href = "registrations.html"; // Chuyển sang trang danh sách
    }
}

function renderRegistrations() {
    const tbody = document.getElementById('registrationTableBody');
    const data = JSON.parse(localStorage.getItem('registrations')) || [];
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Chưa có lượt đăng ký nào.</td></tr>';
        return;
    }

    data.forEach((reg, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <strong>${reg.name}</strong><br>
                    <small class="text-muted">${reg.phone} | ${reg.email}</small>
                </td>
                <td>${reg.className}</td>
                <td><span class="badge bg-success">${reg.courseTitle}</span></td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="deleteRegistration(${reg.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

function deleteRegistration(id) {
    if(confirm("Bạn có chắc chắn muốn xóa đăng ký này?")) {
        let data = JSON.parse(localStorage.getItem('registrations')) || [];
        data = data.filter(reg => reg.id !== id);
        localStorage.setItem('registrations', JSON.stringify(data));
        renderRegistrations();
    }
}

function clearAllRegistrations() {
    if(confirm("Xóa TOÀN BỘ danh sách đăng ký? Hành động này không thể hoàn tác.")) {
        localStorage.removeItem('registrations');
        renderRegistrations();
    }
}