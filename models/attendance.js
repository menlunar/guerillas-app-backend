const pool = require('../config/db');

// Fetch attendance data from the view
const getAttendance = async () => {
    try {
        const result = await pool.query(`
            SELECT training_date,
                   name,
                   training_category,
                   membership,
                   training_fee,
                   mode_of_payment,
                   payment_amount,
                   payment_receiver,
                   admin_receiver,
                   is_event,
                   waived,
                   waived_amount,
                   waived_description
              FROM rn_vw_Attendance
        `);
        return result.rows;
    } catch (err) {
        throw err;
    }
};

// Add a new attendance record
const addAttendance = async (attendanceData) => {
    const { training_date, user_id, event_training_fee, payment_amount, mode_of_payment, payment_receiver, waived, waived_amount, waived_description, is_event, training_category_id, admin_id } = attendanceData;

    try {
        const query = `
            INSERT INTO "Attendance" (training_date, user_id, event_training_fee, payment_amount, mode_of_payment, payment_receiver, waived, waived_amount, waived_description, is_event,training_category_id, admin_id)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING *;
        `;
        const values = [training_date, user_id, event_training_fee, payment_amount, mode_of_payment, payment_receiver, waived, waived_amount, waived_description, is_event, training_category_id, admin_id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};

module.exports = { getAttendance, addAttendance };
