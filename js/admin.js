/**
 * โครงการแจกกางเกงในฟรี เพื่อคนไทยทุกคน - Admin Backend Logic Module
 */

const STORAGE_KEY_CLAIMS = 'free_underwear_claims';
const STORAGE_KEY_MESSAGES = 'free_underwear_messages';
const STORAGE_KEY_AUTH = 'free_underwear_admin_auth';

// Sample Initial Claims Data
const INITIAL_CLAIMS = [
  {
    id: 'CLM-1001',
    name: 'นายสมชาย ใจดี',
    phone: '081-234-5678',
    email: 'somchai@gmail.com',
    size: 'M',
    address: '123/45 ถ.สุขุมวิท แขวงคลองเตย เขตวัฒนา กรุงเทพฯ 10110',
    status: 'อนุมัติแล้ว',
    date: '2026-08-30 10:15'
  },
  {
    id: 'CLM-1002',
    name: 'นางสาววิภาดา รัตนกุล',
    phone: '089-876-5432',
    email: 'wipada@hotmail.com',
    size: 'S',
    address: '88/12 ถ.พหลโยธิน ต.ในเมือง อ.เมือง จ.เชียงใหม่ 50000',
    status: 'จัดส่งแล้ว',
    date: '2026-08-29 14:30'
  },
  {
    id: 'CLM-1003',
    name: 'นายกิตติศักดิ์ มีสุข',
    phone: '092-333-4455',
    email: 'kittisak@yahoo.com',
    size: 'L',
    address: '45/9 หมู่ 3 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000',
    status: 'รอยืนยัน',
    date: '2026-08-31 09:20'
  },
  {
    id: 'CLM-1004',
    name: 'นางประภา ศรีสง่า',
    phone: '086-555-7788',
    email: 'prapha@gmail.com',
    size: 'XL',
    address: '12 หมู่ 5 ต.ลาดหญ้า อ.เมือง จ.กาญจนบุรี 71000',
    status: 'รอยืนยัน',
    date: '2026-09-01 08:45'
  },
  {
    id: 'CLM-1005',
    name: 'นายธนกร สุวรรณ',
    phone: '084-111-2233',
    email: 'thanakorn@outlook.com',
    size: '2XL',
    address: '99/9 ถ.สุขสวัสดิ์ อ.พระประแดง จ.สมุทรปราการ 10130',
    status: 'จัดส่งแล้ว',
    date: '2026-08-28 16:00'
  }
];

// Sample Initial Messages Data
const INITIAL_MESSAGES = [
  {
    id: 'MSG-2001',
    name: 'คุณณัฐวุฒิ',
    email: 'nuttawut@example.com',
    subject: 'สอบถามเรื่องไซส์กางเกงใน',
    message: 'สวัสดีครับ ไซส์ L มีรอบเอวกี่นิ้วครับ พอดีรอบเอว 34 นิ้วควรใส่ไซส์ไหนครับ',
    date: '2026-08-31 11:10'
  },
  {
    id: 'MSG-2002',
    name: 'คุณสุภาพร',
    email: 'supaporn@example.com',
    subject: 'อยากร่วมบริจาคเงินสมทบโครงการ',
    message: 'ประทับใจโครงการแจกฟรีมากค่ะ อยากทราบว่าสามารถร่วมบริจาคสมทบทุนจัดซื้อกางเกงในเพิ่มได้ช่องทางไหนคะ',
    date: '2026-09-01 09:05'
  }
];

// Initialize Data in Storage
function seedInitialData() {
  if (!localStorage.getItem(STORAGE_KEY_CLAIMS)) {
    localStorage.setItem(STORAGE_KEY_CLAIMS, JSON.stringify(INITIAL_CLAIMS));
  }
  if (!localStorage.getItem(STORAGE_KEY_MESSAGES)) {
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(INITIAL_MESSAGES));
  }
}

// Get Data helpers
function getClaims() {
  seedInitialData();
  return JSON.parse(localStorage.getItem(STORAGE_KEY_CLAIMS)) || [];
}

function saveClaims(claims) {
  localStorage.setItem(STORAGE_KEY_CLAIMS, JSON.stringify(claims));
}

function getMessages() {
  seedInitialData();
  return JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES)) || [];
}

function saveMessages(msgs) {
  localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(msgs));
}

// Admin App Controller
document.addEventListener('DOMContentLoaded', () => {
  seedInitialData();

  const loginScreen = document.getElementById('adminLoginScreen');
  const dashboardView = document.getElementById('adminDashboardView');
  const loginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  if (!loginScreen || !dashboardView) return;

  // Check login session
  const isLoggedIn = sessionStorage.getItem(STORAGE_KEY_AUTH) === 'true';

  if (isLoggedIn) {
    loginScreen.style.display = 'none';
    dashboardView.style.display = 'block';
    renderDashboard();
  } else {
    loginScreen.style.display = 'flex';
    dashboardView.style.display = 'none';
  }

  // Handle Login Submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('adminUser').value.trim();
      const pass = document.getElementById('adminPass').value.trim();

      if (user === 'admin' && pass === 'admin123') {
        sessionStorage.setItem(STORAGE_KEY_AUTH, 'true');
        loginScreen.style.display = 'none';
        dashboardView.style.display = 'block';
        renderDashboard();
        showToast('🔓 เข้าสู่ระบบหลังบ้านสำเร็จ!', 'success');
      } else {
        const errorMsg = document.getElementById('loginErrorMsg');
        if (errorMsg) errorMsg.style.display = 'block';
      }
    });
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(STORAGE_KEY_AUTH);
      loginScreen.style.display = 'flex';
      dashboardView.style.display = 'none';
      showToast('ออกจากระบบเรียบร้อยแล้ว', 'success');
    });
  }
});

// Render Main Dashboard
function renderDashboard() {
  renderStats();
  renderClaimsTable();
  renderMessagesTable();
  initDashboardEvents();
}

// Render Stats Cards
function renderStats() {
  const claims = getClaims();

  const totalCount = claims.length;
  const pendingCount = claims.filter(c => c.status === 'รอยืนยัน').length;
  const approvedCount = claims.filter(c => c.status === 'อนุมัติแล้ว').length;
  const shippedCount = claims.filter(c => c.status === 'จัดส่งแล้ว').length;

  document.getElementById('statTotal').textContent = totalCount;
  document.getElementById('statPending').textContent = pendingCount;
  document.getElementById('statApproved').textContent = approvedCount;
  document.getElementById('statShipped').textContent = shippedCount;
}

// Render Claims Table
function renderClaimsTable() {
  const tableBody = document.getElementById('claimsTableBody');
  const searchInput = document.getElementById('searchClaimInput');
  const filterStatus = document.getElementById('filterStatus');
  const filterSize = document.getElementById('filterSize');

  if (!tableBody) return;

  let claims = getClaims();

  // Search filter
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedStatus = filterStatus ? filterStatus.value : 'all';
  const selectedSize = filterSize ? filterSize.value : 'all';

  claims = claims.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(query) ||
                          c.phone.includes(query) ||
                          c.address.toLowerCase().includes(query) ||
                          c.id.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === 'all' || c.status === selectedStatus;
    const matchesSize = selectedSize === 'all' || c.size === selectedSize;

    return matchesSearch && matchesStatus && matchesSize;
  });

  if (claims.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">
          ไม่พบข้อมูลผู้ลงทะเบียนที่ตรงกับเงื่อนไข
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = claims.map(c => `
    <tr>
      <td><strong>${c.id}</strong></td>
      <td>
        <div style="font-weight: 600;">${c.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${c.phone}</div>
      </td>
      <td><span class="size-badge">${c.size}</span></td>
      <td style="max-width: 260px; font-size: 0.85rem; color: #475569;">${c.address}</td>
      <td><span class="status-badge status-${getStatusClass(c.status)}">${c.status}</span></td>
      <td style="font-size: 0.8rem; color: var(--text-muted);">${c.date}</td>
      <td>
        <div class="action-btn-group">
          <select class="status-select" onchange="updateClaimStatus('${c.id}', this.value)">
            <option value="รอยืนยัน" ${c.status === 'รอยืนยัน' ? 'selected' : ''}>รอยืนยัน</option>
            <option value="อนุมัติแล้ว" ${c.status === 'อนุมัติแล้ว' ? 'selected' : ''}>อนุมัติแล้ว</option>
            <option value="จัดส่งแล้ว" ${c.status === 'จัดส่งแล้ว' ? 'selected' : ''}>จัดส่งแล้ว</option>
            <option value="ยกเลิก" ${c.status === 'ยกเลิก' ? 'selected' : ''}>ยกเลิก</option>
          </select>
          <button class="btn-delete-icon" onclick="deleteClaim('${c.id}')" title="ลบข้อมูล">&times;</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Render Contact Messages Table
function renderMessagesTable() {
  const tableBody = document.getElementById('messagesTableBody');
  if (!tableBody) return;

  const messages = getMessages();

  if (messages.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 32px;">
          ยังไม่มีข้อความส่งเข้ามา
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = messages.map(m => `
    <tr>
      <td><strong>${m.id}</strong></td>
      <td>
        <div style="font-weight: 600;">${m.name}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${m.email}</div>
      </td>
      <td><strong>${m.subject}</strong></td>
      <td style="max-width: 320px; font-size: 0.88rem; color: #475569;">${m.message}</td>
      <td style="font-size: 0.8rem; color: var(--text-muted);">${m.date}</td>
    </tr>
  `).join('');
}

function getStatusClass(status) {
  switch (status) {
    case 'รอยืนยัน': return 'pending';
    case 'อนุมัติแล้ว': return 'approved';
    case 'จัดส่งแล้ว': return 'shipped';
    case 'ยกเลิก': return 'cancelled';
    default: return 'default';
  }
}

// Update Claim Status
window.updateClaimStatus = function(id, newStatus) {
  let claims = getClaims();
  const index = claims.findIndex(c => c.id === id);
  if (index !== -1) {
    claims[index].status = newStatus;
    saveClaims(claims);
    renderStats();
    renderClaimsTable();
    showToast(`อัปเดตสถานะ ${id} เป็น "${newStatus}" เรียบร้อยแล้ว`, 'success');
  }
};

// Delete Claim
window.deleteClaim = function(id) {
  if (confirm(`คุณต้องการลบรายการ ${id} ใช่หรือไม่?`)) {
    let claims = getClaims();
    claims = claims.filter(c => c.id !== id);
    saveClaims(claims);
    renderStats();
    renderClaimsTable();
    showToast(`ลบรายการ ${id} เรียบร้อยแล้ว`, 'success');
  }
};

// Search & Filter Event Handlers
function initDashboardEvents() {
  const searchInput = document.getElementById('searchClaimInput');
  const filterStatus = document.getElementById('filterStatus');
  const filterSize = document.getElementById('filterSize');

  if (searchInput) searchInput.addEventListener('input', renderClaimsTable);
  if (filterStatus) filterStatus.addEventListener('change', renderClaimsTable);
  if (filterSize) filterSize.addEventListener('change', renderClaimsTable);

  // Tab switching
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-target');
      document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');
      const targetElem = document.getElementById(target);
      if (targetElem) targetElem.style.display = 'block';
    });
  });

  // Export CSV
  const exportBtn = document.getElementById('exportCsvBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportToCSV);
  }
}

// Export Claims to CSV
function exportToCSV() {
  const claims = getClaims();
  if (claims.length === 0) {
    showToast('ไม่มีข้อมูลสำหรับส่งออก', 'error');
    return;
  }

  let csvContent = "\uFEFFรหัส,ชื่อ-นามสกุล,เบอร์โทรศัพท์,อีเมล,ไซส์,ที่อยู่จัดส่ง,สถานะ,วันที่ลงทะเบียน\n";

  claims.forEach(c => {
    const row = [
      `"${c.id}"`,
      `"${c.name}"`,
      `"${c.phone}"`,
      `"${c.email}"`,
      `"${c.size}"`,
      `"${c.address.replace(/"/g, '""')}"`,
      `"${c.status}"`,
      `"${c.date}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `free_underwear_claims_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📥 ดาวน์โหลดไฟล์ CSV เรียบร้อยแล้ว', 'success');
}
