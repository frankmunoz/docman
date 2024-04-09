--Administración
Pais
Ciudad
Tipo de Persona
Perfil
Modulo
Moneda
Medio de recepción
Tipo de radicación
Dependencia 
Tipo de Correspondencia
Persona
Tipo de Contacto


Numero de radicacion


Revisión Avances outputs
Se solicita aclaración sobre el proceso de cambiar los valores que se ingresaron en horas para las Actividades Tipo C1, así como el cálculo del Balance respecto a la Meta, el Progreso y Avance de cada Sesión
Vía Skype se realiza la aclaración sobre el proceso de cambiar los valores que se ingresaron en horas para las Actividades Tipo C1, así como el cálculo del Balance respecto a la Meta, el Progreso y Avance de cada Sesión

DROP TABLE IF EXISTS pais;
CREATE TABLE pais(
	id INT AUTO_INCREMENT PRIMARY KEY,
	codigo VARCHAR(3) NOT NULL,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS ciudad;
CREATE TABLE ciudad(
	id INT AUTO_INCREMENT PRIMARY KEY,
	pais INT NOT NULL,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS persona_tipo;
CREATE TABLE persona_tipo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS perfil;
CREATE TABLE perfil(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS modulo;
CREATE TABLE modulo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS moneda;
CREATE TABLE moneda(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL,
	abreviatura VARCHAR(5) NOT NULL
);

DROP TABLE IF EXISTS medio_recepcion;
CREATE TABLE medio_recepcion(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS radicacion_tipo;
CREATE TABLE radicacion_tipo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS dependencia;
CREATE TABLE dependencia(
	id INT AUTO_INCREMENT PRIMARY KEY,
	persona_responsable INT NOT NULL DEFAULT 0,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS correspondencia_tipo;
CREATE TABLE correspondencia_tipo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS persona;
CREATE TABLE persona(
	id INT AUTO_INCREMENT PRIMARY KEY,
	persona_tipo INT NOT NULL,
	perfil INT NOT NULL DEFAULT 0,
	ciudad INT NOT NULL DEFAULT 0,
	dependencia INT NOT NULL DEFAULT 0,
	documento VARCHAR(20) NOT NULL DEFAULT 0,
	nombre VARCHAR (120) NOT NULL,
	apellido_primero VARCHAR(120),
	apellido_segundo VARCHAR(120),
	usuario VARCHAR(120) NOT NULL DEFAULT '',
	sigla VARCHAR(20),
	clave VARCHAR(200) NOT NULL,
	fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS perfil_modulo;
CREATE TABLE perfil_modulo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	perfil INT NOT NULL,
	modulo INT NOT NULL,
	ver INT NOT NULL,
	crear INT NOT NULL,
	editar INT NOT NULL,
	eliminar INT NOT NULL
);

DROP TABLE IF EXISTS contacto_tipo;
CREATE TABLE contacto_tipo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS radicacion_correspondencia_extension;
CREATE TABLE radicacion_correspondencia_extension(
	id INT AUTO_INCREMENT PRIMARY KEY,
	radicacion_correspondencia INT NOT NULL,
	persona INT NULL,
	moneda INT NOT NULL,
	numero VARCHAR(50) NOT NULL,
	monto VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS radicacion_correspondencia;
CREATE TABLE radicacion_correspondencia(
	id INT AUTO_INCREMENT PRIMARY KEY,
	radicacion_tipo INT NOT NULL,
	correspondencia_tipo INT NOT NULL,
	dependencia INT NULL,
	persona INT NULL,
	medio_recepcion INT NOT NULL,
	numero_folios int NOT NULL,
	numero_anexos int NOT NULL,
	fecha_entrega DATETIME NOT NULL,
	fecha_radicacion DATETIME NOT NULL,
	fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS documento_estado;
CREATE TABLE documento_estado(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(120) NOT NULL
);

DROP TABLE IF EXISTS radicacion_correspondencia_comentario;
CREATE TABLE radicacion_correspondencia_comentario(
	id INT AUTO_INCREMENT PRIMARY KEY,
	radicacion_correspondencia INT NOT NULL,
	persona INT NOT NULL,
	comentario TEXT NOT NULL,
	fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS documento;
CREATE TABLE documento(
	id INT AUTO_INCREMENT PRIMARY KEY,
	radicacion_correspondencia INT NOT NULL,
	documento_estado INT NOT NULL,
	mime_type VARCHAR(120) NOT NULL,
	extension VARCHAR(15) NOT NULL,
	peso FLOAT NOT NULL,
	fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO radicacion_tipo (descripcion)VALUES
('Entrada'),
('Salida');

INSERT INTO correspondencia_tipo (descripcion)VALUES
('Remitente'),
('Destinatario'),
('Entidad'),
('Factura'),
('Trip'),
('TipoRadicacion');

INSERT INTO dependencia (descripcion)VALUES
('Finanzas'),
('Representación'),
('Comunicaciones'),
('Implementación'),
('Administración'),
('Recursos Humanos'),
('Movilización de Recursos'),
('MAR'),
('IT'),
('SCU'),
('Asistencia Tecnica'),
('Nutrifami');

INSERT INTO documento_estado (descripcion)VALUES
('Revisado'),
('Tramitado'),
('Espera');

INSERT INTO medio_recepcion (descripcion)VALUES
('descripcion'),
('Correo Certificado'),
('Mail'),
('Personal'),
('Telefonico'),
('A.Personalizada');


INSERT INTO moneda (descripcion,abreviatura)VALUES
('Pesos colombianos','COP'),
('Dollar americano','USD'),
('Euro','EUR');

INSERT INTO persona_tipo (descripcion)VALUES
('DON'),
('EMPL'),
('EXTV'),
('IRV'),
('NECL'),
('NETR'),
('OPS');


INSERT INTO perfil (descripcion)VALUES
('Administrador');


INSERT INTO contacto_tipo (descripcion)VALUES
('Teléfono'),
('Dirección'),
('Celular'),
('Correo Electrónico');



INSERT INTO pais (codigo,descripcion)
SELECT PaisCodigo,PaisNombre FROM paistmp;

INSERT INTO ciudad (pais,descripcion)
SELECT P.id,C.CiudadNombre FROM CiudadTmp C JOIN pais P ON P.codigo = C.PaisCodigo;



DROP TABLE PaisTmp;
DROP TABLE CiudadTmp;