import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
}

export async function signUp(
  userData: {
    email: string;
    password: string;
    fullName: string;
    role?: string;
  },
  callback: (response: { status: boolean; message: string }) => void
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = await snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({
      status: false,
      message: "Email already exist",
    });
  } else {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";
      await addDoc(collection(firestore, "users"), userData);
      callback({
        status: true,
        message: "Success",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      callback({
        status: false,
        message: errorMessage,
      });
    }
  }
}
