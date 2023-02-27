import { ProductData } from "./static-product";
import fs from "fs/promises";
import path from "path";

export async function getData() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data: ProductData = JSON.parse(jsonData);
  
    return data;
  }