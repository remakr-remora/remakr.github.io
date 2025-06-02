---
layout: page
title: 문의하기
permalink: /contact/
---

<div class="contact-section">
  <h2>레슨 문의 및 상담 신청</h2>
  
  <div class="contact-info">
    <p>아래의 연락처로 문의하시면 24시간 내에 답변드립니다.</p>
    <p><strong>전화:</strong> {{ site.phone }}</p>
    <p><strong>이메일:</strong> {{ site.email }}</p>
  </div>
  
  <div class="contact-form">
    <form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="phone">연락처</label>
        <input type="tel" id="phone" name="phone">
      </div>
      
      <div class="form-group">
        <label for="service">관심 서비스</label>
        <select id="service" name="service">
          <option value="onepoint">원포인트 레슨</option>
          <option value="fourpack">4회권</option>
          <option value="eightpack">8회권</option>
          <option value="other">기타 문의</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message">문의 내용</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="btn btn-primary">보내기</button>
    </form>
  </div>
</div>

<div class="available-locations">
  <h2>레슨 가능 지역</h2>
  <ul>
    <li>성남 수내</li>
    <li>성남 금곡</li>
    <li>성남 서현</li>
    <li>성남 야탑</li>
  </ul>
  <p>위 지역 외 수업 가능 여부는 문의 바랍니다.</p>
  <p><strong>참고:</strong> 당분간 평일 저녁 레슨은 불가합니다.</p>
</div>

<style>
  .contact-section {
    margin-bottom: 40px;
  }
  
  .contact-info {
    margin-bottom: 30px;
  }
  
  .contact-form .form-group {
    margin-bottom: 20px;
  }
  
  .contact-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .available-locations {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 4px;
    margin-top: 40px;
  }
  
  .available-locations ul {
    padding-left: 20px;
  }
  
  .available-locations li {
    margin-bottom: 5px;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Replace with actual form submission code
      alert('현재 폼 제출 기능은 준비 중입니다. 곧 활성화될 예정입니다. 문의사항은 전화나 이메일로 연락주세요.');
    });
  });
</script>
