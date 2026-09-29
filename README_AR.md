# موقع المستشار يوسف عبدالوهاب العبادي

نسخة كاملة جاهزة للرفع على **GitHub** والنشر على **Vercel**، وتحتوي على جميع ملفات React وCSS والصور المستخدمة محليًا داخل المشروع.

## التشغيل على Windows

1. فك ضغط الملف.
2. افتح المجلد الذي يحتوي على `package.json`.
3. اضغط على شريط العنوان في File Explorer، اكتب `cmd` ثم اضغط Enter.
4. ثبّت الاعتمادات:

```bash
npm install
```

أو باستخدام pnpm:

```bash
pnpm install
```

5. شغّل الموقع:

```bash
npm run dev
```

6. افتح:

```text
http://localhost:3000
```

> لا تفتح ملف `index.html` بالضغط المزدوج؛ يجب تشغيل Vite بالأمر السابق.

## الرفع على GitHub

1. أنشئ Repository جديدًا على GitHub.
2. فك ضغط المشروع على جهازك.
3. افتح CMD داخل مجلد المشروع.
4. نفّذ:

```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

استبدل `USERNAME/REPOSITORY` ببيانات Repository الخاص بك.

## النشر على Vercel

1. افتح Vercel واختر **Add New Project**.
2. اختر Repository من GitHub.
3. اترك الإعدادات الافتراضية؛ يوجد ملف `vercel.json` جاهز.
4. اضغط **Deploy**.

إعدادات البناء المستخدمة:

- Build command: `npm run build`
- Output directory: `dist/public`
- Framework: Vite

## أهم الملفات

- `client/src/pages/Home.tsx`: محتوى الصفحة والتبديل بين العربية والإنجليزية.
- `client/src/index.css`: التصميم والاستجابة للموبايل.
- `client/public/assets/`: الصور المحلية المستخدمة في الموقع.
- `package.json` و`pnpm-lock.yaml`: الاعتمادات المطلوبة.
- `vercel.json`: إعداد النشر على Vercel.

## ملاحظات

- مجلد `node_modules` غير مرفق عمدًا؛ يتم إنشاؤه تلقائيًا بعد `npm install` أو `pnpm install`، ولا يجب رفعه إلى GitHub.
- مجلد `dist` غير مطلوب للرفع؛ Vercel يبنيه تلقائيًا من المصدر.
- لا توجد مفاتيح سرية أو متغيرات بيئة مطلوبة لتشغيل هذا الموقع.
- الصور محفوظة داخل المشروع، لذلك لن تعتمد النسخة على روابط Manus الخارجية.

## المتطلبات

- Node.js إصدار LTS حديث، ويفضل Node 20 أو 22.
- اتصال بالإنترنت عند تثبيت الاعتمادات أول مرة.
