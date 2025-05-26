# 🧩 Backend - Gestor de Cotxes (Projecte Web)

Aquest projecte implementa un servidor REST per gestionar una base de dades de vehicles de renting.  
El backend està desenvolupat amb **Node.js**, **Express** i **MongoDB**.

---

## 📋 Instruccions pas a pas

### 1. Instal·lació de dependències

```bash
npm install
```

---

### 2. Crear la base de dades amb dades de prova ✅

Per crear la base de dades i afegir cotxes d'exemple, executa:

```bash
node importData.js
```

📌 Aquest script afegeix 3 cotxes ficticis amb imatges:  
**BMW**, **Toyota** i **Audi**

Cada cotxe té:
- Marca
- Model
- Any
- Color
- Estat (disponible, reservat, llogat)
- Imatge (`bmw.png`, etc.)

---

### 3. Executar el servidor ✅

Per posar en marxa l'API:

```bash
node app.js
```

Després d'això, el servidor estarà escoltant a:

📎 `http://localhost:3000`

---

## Estructura del projecte ✅

```
Backend/
├── app.js                 # Entrada principal del servidor
├── importData.js         # Script per carregar dades de prova
├── config/
│   └── db.js             # Connexió amb MongoDB
├── controllers/
│   └── carController.js  # Lògica CRUD
├── models/
│   └── car.js            # Esquema del model Coche
├── routes/
│   └── carRoutes.js      # Rutes de l'API REST
├── package.json          # Dependències
└── README.md             # Instruccions (aquest fitxer)
```

---

## ℹ️ Exemple de cotxe en format JSON

```json
{
  "marca": "BMW",
  "modelo": "X3",
  "anio": 2022,
  "color": "Negre",
  "estado": "disponible",
  "imagen": "bmw.png"
}
```

---

## ✅ Resum

- ✔️ Té dades de prova
- ✔️ Té instruccions clares d’instal·lació i execució
- ✔️ Té estructura del projecte explicada
- ✔️ Fet seguint el patró MVVM amb separació clara del model

---

👤 **Fet per:** *[Escriu aquí el teu nom i grup]*
