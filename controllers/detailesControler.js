const  UserDetailesModel= require('../models/userDetailes');

const getDetailes = async (request, response) => {
  try {
    const detailes = await UserDetailesModel.find()
    response.send({ status: 'success', detailes
  });
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching deatiles' });
  }
}

const getDetailesByID = async (request, response) => {
  const { detailID } = request.params

  try {
    const detail = await UserDetailesModel.findById(detailID)
    if (!detail) {
      response.status(404).send({ status: 'error', msg: 'detail not found' });
    } else {
      response.send({ status: 'success', detail: detail });
    }
  } catch (err) {
    console.log("Error fetching detail from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching detail from DB' });
  }
}

const postdetail = async (request, response) => {
  const detailData = request.body

  try {

    const resultdetail = await UserDetailesModel.create(detailData);
    console.log(resultdetail)
    response.status(201).send({ status: 'success', detail: resultdetail });
  } catch (err) {
    console.log(err)
    response.status(500).send({ status: 'error', msg: err.errors });
  }
}

module.exports = { getDetailes, getDetailesByID, postdetail }