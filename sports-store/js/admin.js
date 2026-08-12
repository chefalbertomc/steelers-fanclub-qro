// Element references
const loginSection = document.getElementById('loginSection');
const adminSection = document.getElementById('adminSection');
const loginError = document.getElementById('loginError');
const uploadStatus = document.getElementById('uploadStatus');
const imagePreview = document.getElementById('imagePreview');

// Handle Auth State
auth.onAuthStateChanged(user => {
  if (user) {
    loginSection.style.display = 'none';
    adminSection.style.display = 'block';
  } else {
    loginSection.style.display = 'block';
    adminSection.style.display = 'none';
  }
});

// Login
document.getElementById('btnLogin').addEventListener('click', async () => {
  const email = document.getElementById('adminEmail').value.trim();
  const pw = document.getElementById('adminPassword').value;
  
  if (!email || !pw) {
    loginError.textContent = 'Completa ambos campos';
    loginError.style.display = 'block';
    return;
  }
  
  try {
    document.getElementById('btnLogin').textContent = 'Entrando...';
    await auth.signInWithEmailAndPassword(email, pw);
  } catch (error) {
    console.error('Error logging in:', error);
    loginError.textContent = 'Credenciales incorrectas';
    loginError.style.display = 'block';
    document.getElementById('btnLogin').textContent = 'Entrar';
  }
});

// Logout
document.getElementById('btnLogout').addEventListener('click', () => {
  auth.signOut();
});

// Image Preview
let selectedFile = null;
document.getElementById('prodImage').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'inline-block';
    };
    reader.readAsDataURL(file);
  }
});

// Submit Form
document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (!selectedFile) {
    alert("Por favor selecciona una imagen");
    return;
  }
  
  const btnSubmit = document.getElementById('btnSubmit');
  const originalText = btnSubmit.textContent;
  
  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Subiendo...';
  uploadStatus.style.color = '#fff';
  uploadStatus.textContent = 'Subiendo imagen...';
  
  try {
    const name = document.getElementById('prodName').value.trim();
    const team = document.getElementById('prodTeam').value;
    const price = parseFloat(document.getElementById('prodPrice').value);
    const desc = document.getElementById('prodDesc').value.trim();
    
    // Upload image to Firebase Storage
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`products/${Date.now()}_${selectedFile.name}`);
    await fileRef.put(selectedFile);
    
    // Get URL
    const imageUrl = await fileRef.getDownloadURL();
    
    uploadStatus.textContent = 'Guardando datos...';
    
    // Save to Firestore
    await db.collection('products').add({
      name,
      team,
      price,
      description: desc,
      imageUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Success
    uploadStatus.style.color = '#4ade80'; // green
    uploadStatus.textContent = '¡Producto subido exitosamente!';
    
    // Reset form
    document.getElementById('productForm').reset();
    imagePreview.style.display = 'none';
    selectedFile = null;
    
    setTimeout(() => {
      uploadStatus.textContent = '';
    }, 4000);
    
  } catch (error) {
    console.error('Error adding product:', error);
    uploadStatus.style.color = '#ff6b6b';
    uploadStatus.textContent = 'Error al subir producto. Intenta de nuevo.';
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.textContent = originalText;
  }
});
