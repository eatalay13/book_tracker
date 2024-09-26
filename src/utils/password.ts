import bcrypt from "bcrypt";

// Şifreleme işlemi için kullanılacak salt tur sayısı
const saltRounds = 10;

export async function saltAndHashPassword(password: string): Promise<string> {
  try {
    // Salt oluşturulur ve şifre hash'lenir
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Şifre hashlenirken bir hata oluştu. " + error);
  }
}
