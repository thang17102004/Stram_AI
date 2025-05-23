const express = require("express");
const authLoginRoutes = require("./src/routes/authLoginRoutes");
const authRegisterRoutes = require("./src/routes/authRegisterRoutes");
const summaryRoutes = require("./src/routes/summaryRoutes");
const analyzeRoutes = require("./src/routes/analyzeRoutes");
const fixSpellRoutes = require("./src/routes/fixSpellRoutes");
const convertRoutes = require("./src/routes/convertRoutes");
const exportWordRoutes = require("./src/routes/exportWordRoutes");
const exportPdfRoutes = require("./src/routes/exportPdfRoutes");


const app = express();
const path = require("path");

//phục vụ cho file web tĩnh
app.use(express.static(path.join(__dirname, './src/public')));

// Lấy dữ liệu được nhập vào từ form bằng (POST method)
app.use(express.urlencoded({ extended: true }));

app.use("/handleFunction", summaryRoutes);
app.use("/handleFunction", analyzeRoutes);
app.use("/handleFunction", fixSpellRoutes);
app.use("/handleFunction", convertRoutes);
app.use("/handleFunction", exportWordRoutes);
app.use("/handleFunction", exportPdfRoutes);

app.use("/", authLoginRoutes);
app.use("/register", authRegisterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});