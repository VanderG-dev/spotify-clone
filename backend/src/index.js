import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import statsRoutes from "./routes/stat.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/users/", userRoutes);
app.use("/api/auth/", authRoutes);
app.use("/api/admin/", adminRoutes);
app.use("/api/songs/", songsRoutes);
app.use("/api/albums/", albumsRoutes);
app.use("/api/stats/", statsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
