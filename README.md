# قالب اخنصاصی مرزبان و مرزنشین اورانوس | Ourenus

## Desktop View
![image](https://github.com/user-attachments/assets/c4c41db3-d83f-4f82-b050-550741a176ac)


## Responsive Mobile View
![image](https://github.com/user-attachments/assets/7d5f48cc-6bed-4040-a3a8-c291783e5ae0)



---

## ساخته شده توسط
- **React**: Version 18
- **Vite**: Version 5
- **Material UI**

---

## ویژگی ها
- **اپلیکیشن ها**: لیست اپلیکیشن های قابل تغییر و توسعه
- **اطلاعات کاربر**: اطلاعات سرویس کامل و کاربردی
- **مدیریت کانفیگ**: دریافت لیست کانفیگ ها و دریافت بارکد هر کانفیگ
- **دو زبانه**: پشتیبانی از زبان انگلیسی و فارسی
- **شخصی سازی**: قابلیت شخصی سازی رنگ ها و تم 

---

## مراحل نصب

### مرزبان

۱. **قالب رو با دستور زیر دانلود کنید**
   ```sh
   sudo wget -N -P /var/lib/marzban/templates/subscription/ https://github.com/mobohes/Ourenus/releases/latest/download/index.html
   ```

۲. **دستورات زیر رو تو ترمینال سرورتون بزنید**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a /opt/marzban/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /opt/marzban/.env
   ```
   یا مقادیر زیر رو در فایل `.env` در پوشه `/opt/marzban` با پاک کردن `#` اول آنها از حالت کامنت در بیارید.
   ```
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

۳. **ریستارت کردن مرزبان**
   ```sh
   marzban restart
   ```

### مرزنشین

۱. **قالب رو با دستور زیر دانلود کنید**
   ```sh
   sudo wget -N -P /var/lib/marzneshin/templates/subscription/ https://github.com/mobohes/Ourenus/releases/latest/download/index.html
   ```

۲. **دستورات زیر رو تو ترمینال سرورتون بزنید**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"' | sudo tee -a /etc/opt/marzneshin/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /etc/opt/marzneshin/.env
   ```
   یا مقادیر زیر رو در فایل `.env` در پوشه `/etc/opt/marzneshin` با پاک کردن `#` اول آنها از حالت کامنت در بیارید.
   ```
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

۳. **ریستارت کردن مرزنشین**
   ```sh
   marzneshin restart
   ```

---

## بروزرسانی قالب
برای بروزرسانی تمپلیت فقط کافیست مرحله 1 را تکرار کنید.

---

## شخصی سازی
برای شخصی سازی لیست اپلیکیشن ها و لیست پشتیبانی:
- **اپلیکیشن ها**: [public-assets Apps JSON](https://github.com/mobohes/public-assets/blob/main/json/apps.json)
- **توضیحات**: ریپازیتوری من رو فورک کنید. و باتوجه به ساختار اون لینک یا اسم یا عکسش رو تغییر بدید

**ویدیو آموزشی**:  
[![YouTube Tutorial Video](https://img.youtube.com/vi/l5Pvy6Hof9o/0.jpg)](https://www.youtube.com/watch?v=l5Pvy6Hof9o)
[![YouTube Tutorial Video #2](https://img.youtube.com/vi/6s8931r9E24/0.jpg)](https://youtu.be/6s8931r9E24)

---

## حمایت و سفارشات
برای پشتیبانی یا سفارش قالب اختصاصی با من توی تلگرام در ارتباط باشید [Telegram](https://t.me/Mqtin).

<a href="https://nowpayments.io/donation?api_key=Z50AKDD-DHSMN86-P0DQ22X-1SQAFCA" target="_blank" rel="noreferrer noopener">
    <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments">
</a>


---

# Ourenus

## Desktop View
![image](https://github.com/user-attachments/assets/c4c41db3-d83f-4f82-b050-550741a176ac)


## Responsive Mobile View
![image](https://github.com/user-attachments/assets/7d5f48cc-6bed-4040-a3a8-c291783e5ae0)


---

## Built With
- **React**: Version 18
- **Vite**: Version 5
- **Material UI**

---

## Features
- **Quick Link Addition**: Add subscription links with ease.
- **Customizable Application List**: Modify and extend the app list as needed.
- **Comprehensive Service Information**: Access detailed and practical service info.
- **Config Management**: Retrieve config lists and generate QR codes for each config.
- **Full App Customization**: Tailor applications completely to your needs.

---

## Installation Steps

### For Marzban

1. **Download the Template File:**
   ```sh
   sudo wget -N -P /var/lib/marzban/templates/subscription/ https://github.com/mobohes/Ourenus/releases/latest/download/index.html
   ```

2. **Execute the Following Commands in Your Server Terminal:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a /opt/marzban/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /opt/marzban/.env
   ```
   Or uncomment the following lines in the `.env` file located in `/opt/marzban` by removing the `#` at the beginning:
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **Restart Marzban:**
   ```sh
   marzban restart
   ```

### For Marzneshin

1. **Download the Template File:**
   ```sh
   sudo wget -N -P /var/lib/marzneshin/templates/subscription/ https://github.com/mobohes/Ourenus/releases/latest/download/index.html
   ```

2. **Execute the Following Commands in Your Server Terminal:**
   ```sh
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"' | sudo tee -a /etc/opt/marzneshin/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /etc/opt/marzneshin/.env
   ```
   Or uncomment the following lines in the `.env` file located in `/etc/opt/marzneshin` by removing the `#` at the beginning:
   ```sh
   CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzneshin/templates/"
   SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
   ```

3. **Restart Marzneshin:**
   ```sh
   marzneshin restart
   ```

---

## Updating the Template
To update the template, simply repeat Step 1 from the installation guide.

---

## Customization
To customize the app list or support List:
- **Apps List**: [public-assets Apps JSON](https://github.com/mobohes/public-assets/blob/main/json/apps.json)
- **Instructions**: Fork the repository if needed, add applications based on the operating system, provide custom icons, or update the program links.

**Video Tutorial**:  
[![YouTube Tutorial Video](https://img.youtube.com/vi/l5Pvy6Hof9o/0.jpg)](https://www.youtube.com/watch?v=l5Pvy6Hof9o)
[![YouTube Tutorial Video #2](https://img.youtube.com/vi/6s8931r9E24/0.jpg)](https://youtu.be/6s8931r9E24)

---

## Support & Custom Orders
For custom templates or support, reach out to me on [Telegram](https://t.me/Mqtin).

<a href="https://nowpayments.io/donation?api_key=Z50AKDD-DHSMN86-P0DQ22X-1SQAFCA" target="_blank" rel="noreferrer noopener">
    <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments">
</a>
