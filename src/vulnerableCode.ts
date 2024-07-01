// Archivo: vulnerableCode.ts

interface User {
    username: string;
    isAdmin: boolean;
}

function deserializeUser(data: string): User {
    return JSON.parse(data);
}

// Ejemplo de uso (simulando un JSON malicioso)
var maliciousData = '{"username": "admin", "isAdmin": true}';
var user = deserializeUser(maliciousData);

if (user.isAdmin) {
    console.log('Acceso concedido como administrador');
} else {
    console.log('Acceso como usuario no administrador');
}
