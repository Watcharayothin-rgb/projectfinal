โครงการแจกกางเกงในฟรี เพื่อคนไทยทุกคน (Free Underwear Campaign)

> โครงงานปลายภาค รายวิชา โปรแกรมกราฟิกสำหรับการออกแบบเว็บไซต์ (From Figma to Live Website)

---

1. ชื่อโครงการ (Project Name)
- ชื่อภาษาไทย: โครงการแจกกางเกงในฟรี เพื่อคนไทยทุกคน
- ชื่อภาษาอังกฤษ: Free Underwear Campaign Project
- คำอธิบายสั้นๆ: เว็บไซต์ส่งเสริมสุขอนามัยและช่วยเหลือสังคม มอบกางเกงในคุณภาพดีฟรีโดยไม่มีค่าใช้จ่าย พัฒนาจากต้นแบบ Figma สู่เว็บไซต์จริงที่รองรับการแสดงผลทุกอุปกรณ์

---

2. Live Website
- URL: `https://projectfinal-gules.vercel.app`

---

3. GitHub Repository
- URL: `https://github.com/Watcharayothin-rgb/projectfinal`

---

4. Figma Design
- URL: `https://www.figma.com/design/b5SqKoGVmPeUlSnAVOU2JQ/finalproject?t=LjaSObPdqEwrgfI2-1` *(โปรดใส่ URL ของงานใน Figma โดยเปิดสิทธิ์เป็น Anyone with the link can view)*

---

5. Project Objectives (วัตถุประสงค์และกลุ่มเป้าหมาย)
วัตถุประสงค์: 
  1. เพื่อสร้างแพลตฟอร์มรับขอสิ่งของจำเป็นพื้นฐาน (กางเกงในฟรี) ที่ใช้งานง่ายและเข้าถึงได้ทุกคน
  2. เพื่อแปลงต้นแบบการออกแบบจาก Figma เป็นเว็บไซต์ที่ใช้งานได้จริง
  3. เพื่อพัฒนาระบบที่มีความยืดหยุ่น (Responsive Design) รองรับทั้งสมาร์ตโฟนและคอมพิวเตอร์
กลุ่มเป้าหมาย: ประชาชนคนไทยทุกเพศทุกวัยที่ต้องการกางเกงในคุณภาพดีเพื่อสุขอนามัย

---

5. Technology Stack (หมวดหมู่เทคโนโลยีที่เลือกใช้)

| หมวดหมู่ (Category) | เทคโนโลยีที่ใช้ (Tool / Technology) | คำอธิบายและเหตุผลในการเลือกใช้ |
| :--- | :--- | :--- |
| Design | Figma | ออกแบบ UI/UX, Design System, Color Scheme และ Layout ต้นแบบ |
| Frontend | HTML5, CSS3, JavaScript (ES6+) | โครงสร้างตามมาตรฐาน Semantic HTML, สไตล์ปรับแต่งเอง และลอจิกการทำงาน |
| CSS / UI | Vanilla CSS (CSS Variables, Flexbox, Grid) | ควบคุมการจัดวางสไตล์อย่างมีประสิทธิภาพสูงสุด รองรับ Dark Navy Theme |
| Framework | None (Pure Vanilla Web Stack) | ไม่ใช้ Framework ส่วนเกิน เพื่อให้เว็บเบา โหลดไว ประสิทธิภาพสูง 100% |
| Build Tool | npm / Laragon Local Server | จำลองและบริหารจัดการสภาพแวดล้อมสำหรับการพัฒนาเว็บไซต์ |
| Assets | SVG Icons, Google Fonts (`Prompt`), Imagen AI | ไอคอน vector ปรับสีได้, ฟอนต์ภาษาไทยสไตล์โมเดิร์น และภาพ 3D Showcase |
| Version Control | Git & GitHub | จัดเก็บและบันทึกประวัติพัฒนาการของ Source Code (Commit History) |
| Hosting | GitHub Pages / Vercel | เผยแพร่เว็บไซต์สู่สาธารณะ |
| AI Tools | Google Gemini (Antigravity AI Assistant) | ช่วยวางโครงสร้างโค้ด เจนภาพประกอบ ตรวจสอบความถูกต้อง และ Debug |
| Testing | Chrome DevTools, Responsive Viewport Simulator | ทดสอบการแสดงผลบนหน้าจอต่างขนาด และตรวจสอบการทำงานของสคริปต์ |

---

6. Features (ฟังก์ชันหลักของเว็บไซต์)

1. หน้าแรก (Home Page): แสดง Hero Banner พร้อมปุ่ม CTA "รับของฟรีเลย", แถบคุณสมบัติหลัก 4 ประการ และส่วนแนะนำโครงการ
2. เกี่ยวกับเรา (About Us Page): อธิบายแนวคิด "เราเป็นใคร?", "เราทำอะไร?", และ "เป้าหมายของเรา"
3. วิธีรับของฟรี (How It Works Page): แนะนำขั้นตอนการขอรับของฟรี 4 สเต็ปง่ายๆ
4. คำถามที่พบบ่อย (FAQ Page): รวบรวม 8 คำถามยอดฮิต พร้อมระบบ Accordion คลิกย่อ-ขยายคำตอบ
5. ติดต่อเรา (Contact Us Page): แสดงข้อมูลการติดต่อและฟอร์มส่งข้อความพร้อมระบบ Form Validation
6. Pop-up Form ลงทะเบียน (Registration Modal): เปิดฟอร์มลงทะเบียนเลือกไซส์กางเกงใน (S, M, L, XL, 2XL) และกรอกที่อยู่จัดส่งได้จากทุกหน้า
7. ระบบหลังบ้านผู้ดูแลโครงการ (Admin Dashboard System):    
   - เข้าผ่านเมนู `ระบบหลังบ้าน` (`admin.html`)
   - แสดงสถิติรวมผู้ลงทะเบียน (รอยืนยัน, อนุมัติแล้ว, จัดส่งแล้ว)
   - ปรับเปลี่ยนสถานะสิทธิ์ของผู้ขอรับของฟรีได้เรียบร้อยแบบ Real-time
   - ระบบค้นหา คัดกรองไซส์/สถานะ และดาวน์โหลดรายงานไฟล์ CSV

---

7. Design Implementation (การนำ Figma มาใช้)
- Layout & Alignment: ถอดโครงสร้าง Grid และ Flexbox จาก Figma ทุกหน้า รวมถึงส่วน Header, Feature Pillars, Content Box และ Footer
- Color Scheme: 
  - Navy Dark Background: `#030F26`, `#0A162D`
  - Primary Accent Blue: `#1B6EF3`, `#3B82F6`
  - Body & Card Light Colors: `#FFFFFF`, `#F2F6FC`
- Typography: เลือกใช้ Google Font `Prompt` ควบคุมน้ำหนักตัวอักษร 300, 400, 500, 600, 700 อ่านง่ายและให้ความรู้สึกโมเดิร์น
- Components: แปลงส่วนประกอบ Figma เป็น Reusable HTML/CSS Components เช่น ปุ่ม Pill Button, Card Component, Header/Footer, Form Control และ Modal Pop-up

---

8. Responsive Design & Testing Evidence (การรองรับอุปกรณ์หลักฐานการทดสอบ)
- Desktop (>= 1200px): แสดงผล Grid Multi-columns เต็มประสิทธิภาพ ปรับระยะห่าง Container พอดี
- Tablet (768px - 1199px): ปรับ Grid เป็น 2 Columns สำหรับ Feature Pillars และ About Cards
- Mobile (< 768px): 
  - สลับระบบ Header Menu เป็น Mobile Drawer (เมนูแฮมเบอร์เกอร์)
  - ปรับการจัดวางทุกส่วนเป็น Single Column อักษรไม่ล้นขอบภาพ ไม่ซ้อนทับ

---

9. Deployment (ขั้นตอนการนำขึ้น Hosting)
- แพลตฟอร์มที่ใช้: Vercel Cloud Platform
- Live URL: `https://projectfinal-gules.vercel.app`
- ขั้นตอนการ Deploy:
  1. อัปโหลดและเชื่อมโยงโค้ดโครงการ `projectfinal` ขึ้นแพลตฟอร์ม Vercel
  2. Vercel ตรวจจับไฟล์ Static Site (HTML/CSS/JS) และทำอัตโนมัติ Build & Preview
  3. ระบบเปิดใช้งาน SSL/HTTPS พร้อมได้ URL สาธารณะเปิดใช้งานได้ทั่วโลกทันที

---

10. Challenges & สิ่งที่ได้เรียนรู้ (ปัญหาและแนวทางแก้ไข)
- ปัญหาที่พบ: การจัดตำแหน่งส่วน Footer ให้ตรงตามสัดส่วน Figma บนหน้าจอที่มีความกว้างต่างกัน
- แนวทางแก้ไข: ใช้ Flexbox ร่วมกับ `max-width` และ `margin: 0 auto` เพื่อล็อกระยะห่างกึ่งกลางของโลโก้ เส้นกั้นแนวตั้ง และรายการเมนู
- สิ่งที่ได้เรียนรู้: กระบวนการถอดดีไซน์จาก Figma สู่โค้ดจริง (Figma to Code Workflow), การจัดการ State ใน JavaScript ด้วย `localStorage`, และการปรับแต่ง Responsive Web Design

---

11. Author (ผู้จัดทำโครงการ)
- ชื่อ-นามสกุล: วัชระโยธิน ทิศลูน
- รหัสนักศึกษา: 68319100073
- สาขาวิชา: เทคโนโลยีธุรกิจดิจิทัล
- รายวิชา: โปรแกรมกราฟิกสำหรับการออกแบบเว็บไซต์ 31910-2026
