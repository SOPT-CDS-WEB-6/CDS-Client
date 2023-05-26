import client from './axios';

export const postInquiryForm = async (formInfo: FormData) => {
  try {
    const data = await client.post('/support/inquiry', formInfo, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
