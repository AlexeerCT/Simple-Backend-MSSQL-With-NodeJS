import { getConnection } from '../database'

// Obtener todos los estudiantes
export const getStudents = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM ALUMNOS');

    const rows = result.recordset;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estudiantes', error });
  }
};

// Obtener un estudiante por número de control
export const getStudent = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection
      .request()
      .input('NUMCONTROL', req.params.id)
      .query('SELECT * FROM ALUMNOS WHERE NUMCONTROL = @NUMCONTROL');

    const student = result.recordset[0];

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el estudiante', error });
  }
};

// Obtener el conteo de estudiantes
export const getStudentsCount = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT COUNT(*) AS count FROM ALUMNOS');

    const count = result.recordset[0].count;
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el conteo de estudiantes', error });
  }
};

// Crear un nuevo estudiante
export const createStudent = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection
      .request()
      .input('NUMCONTROL', req.body.NUMCONTROL)
      .input('NOMBRE', req.body.NOMBRE)
      .input('APELLIDOP', req.body.APELLIDOP)
      .input('APELLIDOM', req.body.APELLIDOM)
      .input('CURP', req.body.CURP)
      .input('GRADO', req.body.GRADO)
      .input('GRUPO', req.body.GRUPO)
      .input('ESPECIALIDAD', req.body.ESPECIALIDAD)
      .query(
        'INSERT INTO ALUMNOS (NUMCONTROL, NOMBRE, APELLIDOP, APELLIDOM, CURP, GRADO, GRUPO, ESPECIALIDAD) VALUES (@NUMCONTROL, @NOMBRE, @APELLIDOP, @APELLIDOM, @CURP, @GRADO, @GRUPO, @ESPECIALIDAD)'
      );

    res.json({
      ...req.body,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el estudiante', error });
    console.log(error);
  }
};

// Eliminar un estudiante por número de control
export const deleteStudent = async (req, res) => {
  try {
    const connection = await getConnection();
    await connection
      .request()
      .input('NUMCONTROL', req.params.id)
      .query('DELETE FROM ALUMNOS WHERE NUMCONTROL = @NUMCONTROL');

    console.log('Se ha eliminado el registro con el número de control: ' + req.params.id + ' correctamente.');
  } catch (error) {
    console.log({ message: 'Error al eliminar el estudiante', error });
  }
};

// Actualizar un estudiante por número de control
export const updateStudent = async (req, res) => {
  try {
    const connection = await getConnection();
    await connection
      .request()
      .input('NUMCONTROL', req.params.id)
      .input('NOMBRE', req.body.NOMBRE)
      .input('APELLIDOP', req.body.APELLIDOP)
      .input('APELLIDOM', req.body.APELLIDOM)
      .input('CURP', req.body.CURP)
      .input('GRADO', req.body.GRADO)
      .input('GRUPO', req.body.GRUPO)
      .input('ESPECIALIDAD', req.body.ESPECIALIDAD)
      .query(
        'UPDATE ALUMNOS SET NOMBRE = @NOMBRE, APELLIDOP = @APELLIDOP, APELLIDOM = @APELLIDOM, CURP = @CURP, GRADO = @GRADO, GRUPO = @GRUPO, ESPECIALIDAD = @ESPECIALIDAD WHERE NUMCONTROL = @NUMCONTROL'
      );

    res.send('Se han actualizado los datos del alumno con el número de control: ' + req.params.id + ' correctamente. Con el nombre: ' + req.body.NOMBRE + ' ' + req.body.APELLIDOP + ' ' + req.body.APELLIDOM);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estudiante', error });
  }
};