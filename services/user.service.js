const { databaseQuery } = require('../database');
const getAllPraktikan = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}
const getUserByName = async (nama) => {
    try {

        const query = `SELECT * FROM praktikan_webdev WHERE nama=$1`;
        const result = await databaseQuery(query, [nama]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}
const getUserByEmailAndTelepon = async (email, telepon) => {
    try {

        const query = `SELECT * FROM praktikan_webdev WHERE email=$1 AND telepon=$2`;
        const result = await databaseQuery(query, [email, telepon]);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}
const updateUser = async (deskripsi, nama) => {
	try {
		const query = `UPDATE praktikan_webdev SET deskripsi=$1 WHERE nama=$2`;
		const result = await databaseQuery(query, [deskripsi, nama]);
		if (!result) {
            throw new Error('Error Updating User Description');
        }
        if (result.rowCount === 0) {
            throw new Error('User Not Found');
        }
        return {
            message: 'User updated successfully',
        };
    } catch (error) {
        return error
    }

}
const deleteUserByEmail = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE email=$1`;
        const result = await databaseQuery(query, [email]);

		if (!result) {
            throw new Error('Error Delete User');
        }
        if (result.rowCount === 0) {
            throw new Error('User Not Found');
        }
        return {
            message: 'User deleted successfully',
        };
    } catch (error) {
        return error
    }

}
const insertNewUser = async ( nama, jenis_kelamin, angkatan, email, telepon, deskripsi ) => {
	try {
		const query = `INSERT INTO praktikan_webdev VALUES ($1, $2, $3, $4, $5, $6)`;
		const result = await databaseQuery(query, [ nama, jenis_kelamin, angkatan, email, telepon, deskripsi ]);
		if (!result){
			throw new Error('Error inserting User');
		}
		return {
			message: 'User inserted successfully',
		};
	} catch (error) {
		return error
	}
}
module.exports =  {
    getAllPraktikan,
    getUserByName,
    getUserByEmailAndTelepon,
    updateUser,
    deleteUserByEmail,
    insertNewUser
}