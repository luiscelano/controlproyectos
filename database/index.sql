CREATE TABLE TIPO_PROYECTO (
ID_TIPO_PROYECTO INT PRIMARY KEY, 
DESCRIPCIÓN VARCHAR (80)
);

INSERT INTO TIPO_PROYECTO (ID_TIPO_PROYECTO, DESCRIPCION) VALUES (01, 'ATRAER A NUEVOS CLIENTES POR MEDIO DE NUESTRA PUBLICIDAD CREATIVA');
INSERT INTO TIPO_PROYECTO (ID_TIPO_PROYECTO, DESCRIPCION) VALUES (02, 'GENERAR MAS GANANCIA A LA EMPRESA');


CREATE TABLE RESPONSABLE (
ID_RESPONSABLE INT PRIMARY KEY,
NOMBRE1 VARCHAR (15),
NOMBRE2 VARCHAR (15),
APELLIDO1 VARCHAR (15),
APELLIDO2 VARCHAR (15),
EMAIL VARCHAR (50),
TELEFONO INT
);

INSERT INTO RESPONSABLE (ID_RESPONSABLE, NOMBRE1, NOMBRE2, APELLIDO1, APELLIDO2, EMAIL, TELEFONO) VALUES (3574, 'HENRY', 'GUSTAVO', 'COTONON', 'PEREZ', 'HENRYCP22@GMAIL.COM', 46352716);
INSERT INTO RESPONSABLE (ID_RESPONSABLE, NOMBRE1, NOMBRE2, APELLIDO1, APELLIDO2, EMAIL, TELEFONO) VALUES (738, 'ISIS', 'ONDINA', 'MENDEZ', 'MENDEZ', 'ISISMM5@GMAIL.COM', 46352534);
INSERT INTO RESPONSABLE (ID_RESPONSABLE, NOMBRE1, NOMBRE2, APELLIDO1, APELLIDO2, EMAIL, TELEFONO) VALUES (7376, 'LUIS', 'EDUARDO', 'ALVARADO', 'CELANO', 'CELANOL@GMAIL.COM', 46352132);
INSERT INTO RESPONSABLE (ID_RESPONSABLE, NOMBRE1, NOMBRE2, APELLIDO1, APELLIDO2, EMAIL, TELEFONO) VALUES (7533, 'RAMON', 'ELIAS', 'CONTRERAS', 'GUZMAN', 'RAMONELIAS@GMAIL.COM', 46578234);


CREATE TABLE ENCARGADO (
ID_PROYECTO INT,
ID_RESPONSABLE INT
);

ALTER TABLE ENCARGADO ADD CONSTRAINT ENCARGADO_RESPOSABLE_FK FOREIGN KEY (ID_RESPONSABLE) REFERENCES RESPONSABLE (ID_RESPONSABLE);
ALTER TABLE ENCARGADO ADD CONSTRAINT ENCARGADO_PROYECTO_FK FOREIGN KEY (ID_PROYECTO) REFERENCES PROYECTO (ID_PROYECTO);

INSERT INTO ENCARGADO (ID_PROYECTO, ID_RESPONSABLE) VALUES (04, 738);
INSERT INTO ENCARGADO (ID_PROYECTO, ID_RESPONSABLE) VALUES (04, 7533);

CREATE TABLE PROYECTO (
ID_PROYECTO INT PRIMARY KEY, 
DESCRIPCION VARCHAR (80),
ID_TIPO_PROYECTO INT,
FECHA DATE
);

ALTER TABLE PROYECTO ADD CONSTRAINT PROYECTO_TIPO_PROYECTO_FK FOREIGN KEY (ID_TIPO_PROYECTO) REFERENCES TIPO_PROYECTO (ID_TIPO_PROYECTO); 

INSERT INTO PROYECTO (ID_PROYECTO, DESCRIPCION, ID_TIPO_PROYECTO, FECHA) VALUES (04,'CONCIERTO GRATUITO, REALIZADO CON NUESTROS INSTRUMENTOS Y EQUIPO PARA PUBLICITARLOS.', 01,'30-05-2020' );
INSERT INTO PROYECTO (ID_PROYECTO, DESCRIPCION, ID_TIPO_PROYECTO, FECHA) VALUES (05, 'CONSEGUIR NUEVOS PROVEEDORES CON MEJORES PRECIOS , MANTENIENDO LA MISMA CALIDAD DE PRODUCTO.', 02,'20-05-2020');

CREATE TABLE ETAPA (
ID_ETAPA INT PRIMARY KEY,
DESCRIPCION VARCHAR (80),
ID_PROYECTO INT
);

ALTER TABLE ETAPA ADD CONSTRAINT ETAPA_PROYECTO_FK FOREIGN KEY (ID_PROYECTO) REFERENCES PROYECTO(ID_PROYECTO);

INSERT INTO ETAPA (ID_ETAPA, DESCRIPCION, ID_PROYECTO) VALUES (31, 'PREPARACION INICIAL', 01);
INSERT INTO ETAPA (ID_ETAPA, DESCRIPCION, ID_PROYECTO) VALUES (32, 'PREPARACION FINAL DEL CONCIERTO', 01);
INSERT INTO ETAPA (ID_ETAPA, DESCRIPCION, ID_PROYECTO) VALUES (33, 'COOTIZACION DE MERCADO', 02);
INSERT INTO ETAPA (ID_ETAPA, DESCRIPCION, ID_PROYECTO) VALUES (34, 'REALIZACION DE CAMBIOS PERTINENTES', 02);

CREATE TABLE ACTIVIDAD (
ID_ACTIVIDAD INT PRIMARY KEY, 
DESCRIPCION VARCHAR (80),
ID_ETAPA INT
); 

ALTER TABLE ACTIVIDAD ADD CONSTRAINT ACTIVIDAD_ETAPA_FK FOREIGN KEY (ID_ETAPA) REFERENCES ETAPA (ID_ETAPA);

INSERT INTO (ID_ACTIVIDAD, DESCRIPCION, ID_ETAPA) VALUES (131, 'CONTRATACION DE LOS MUSICOS, PRUEBA DE LOS INSTRUMENTOS PUBLICACION DEL EVENTO POR DISTINTAS REDES SOCIALES', 31);
INSERT INTO (ID_ACTIVIDAD, DESCRIPCION, ID_ETAPA) VALUES (132, 'VERIFICACION DEL SALON, ALIMENTOS, ASIENTOS Y NUMERO DE ASISTENTES AL CONCIERTO', 32);
INSERT INTO (ID_ACTIVIDAD, DESCRIPCION, ID_ETAPA) VALUES (133, 'COOTIZAR LOS DISTINTOS PRECIOS A LOS DIFERENTES PROVEEDORES Y COMPARAR PRECIO Y CALIDAD DEL PRODUCTO', 33);
INSERT INTO (ID_ACTIVIDAD, DESCRIPCION, ID_ETAPA) VALUES (134, 'EN BASE A LOS DATOS OBTENIDOS EN LA COOTIZACION DE MERCADO DECIDIR Y EFECTUAR LOS CAMBIOS PERTINENTES', 34);


SELECT FROM PROYECTO WHERE ID_RESPONSABLE=$ID_RESPONSABLE