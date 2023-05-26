import { styled } from 'styled-components';
import {
  INQUIRY_AREAS,
  INQUIRY_CONTENT_PLACEHOLDER,
  INQUIRY_THEATER_CHOICE_OPTIONS,
  INQUIRY_TYPES,
} from '../../constants/inquiry';
import React, { useState } from 'react';
import { IcSendButton } from '../../asset/icon';
import { IcCancelButton } from '../../asset/icon';
import { convertURLtoFile } from '../../utils/convertUrlToFile';
import { postInquiryForm } from '../../libs/postFormData';

const InquiryForm = () => {
  const [loadedImg, setLoadedImg] = useState<string>('');
  const [isTheaterSelected, setIsTheaterSelected] = useState<boolean>(false);
  const [inquiryInfo, setInquiryInfo] = useState({});

  const handlePostInquiry = async (e: React.FormEvent) => {
    e.preventDefault();

    const inquiryFormData = new FormData();
    if (loadedImg.length > 0) {
      const imgToFile = convertURLtoFile(loadedImg);
      inquiryFormData.append('file', imgToFile);
    }

    const inquiryInfoString = JSON.stringify(inquiryInfo);

    inquiryFormData.append('data', new Blob([inquiryInfoString], { type: 'application/json' }));

    const response = await postInquiryForm(inquiryFormData);
    console.log(response);

    if (response?.status === 201) {
      alert('문의가 접수되었습니다.');
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'theater') {
      if (e.target.value === '선택하지 않음') {
        setIsTheaterSelected(false);
        setInquiryInfo({ ...inquiryInfo, userNumber: 1, isTheaterSelected: false });
      } else {
        setIsTheaterSelected(true);
        setInquiryInfo({ ...inquiryInfo, userNumber: 1, isTheaterSelected: true });
      }

      return;
    }
    setInquiryInfo({ ...inquiryInfo, userNumber: 1, [e.target.name]: e.target.value });
  };

  const handleSelectTheater = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInquiryInfo({ ...inquiryInfo, [e.target.name]: e.target.value });
  };

  const handleLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadingInput = e.target;
    const uploadedImg = (uploadingInput.files as FileList)[0];

    if (uploadedImg === undefined) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadedImg(reader.result as string);
    };

    reader.readAsDataURL(uploadedImg);
  };

  return (
    <StInquiryForm onSubmit={(e) => handlePostInquiry(e)}>
      <table>
        <StInquiryBody>
          <tr>
            <th>
              문의유형<em>*</em>
            </th>
            <td>
              {INQUIRY_TYPES.map((type, idx) => (
                <label key={idx}>
                  <input type="radio" name="type" value={type} onChange={(e) => handleValue(e)} /> <p>{type}</p>
                </label>
              ))}
            </td>
            <hr />
          </tr>

          <tr>
            <th>영화관 선택</th>
            <td>
              {INQUIRY_THEATER_CHOICE_OPTIONS.map((type, idx) => (
                <label key={idx}>
                  <input type="radio" name="theater" value={type} onChange={(e) => handleValue(e)} /> <p>{type}</p>
                </label>
              ))}
              <select name="domestic" disabled={!isTheaterSelected} onChange={(e) => handleSelectTheater(e)}>
                <option selected={true} value="국내">
                  국내
                </option>
                <option value="국외">국외</option>
              </select>
              <select name="region" disabled={!isTheaterSelected} onChange={(e) => handleSelectTheater(e)}>
                <option value="">지역선택</option>
                {INQUIRY_AREAS.map((area, idx) => (
                  <option value={area} key={idx}>
                    {area}
                  </option>
                ))}
              </select>
              <select name="cinemaName" disabled={!isTheaterSelected} onChange={(e) => handleSelectTheater(e)}>
                <option value="서울">영화관 선택</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>
              제목<em>*</em>
            </th>
            <td>
              <StTitleInput type="text" name="title" onChange={(e) => handleValue(e)} />
            </td>
          </tr>
          <tr>
            <th>
              내용<em>*</em>
            </th>
            <td>
              <input
                type="text"
                name="content"
                placeholder={INQUIRY_CONTENT_PLACEHOLDER}
                onChange={(e) => handleValue(e)}
              />
            </td>
          </tr>

          <tr>
            <th>첨부파일</th>
            <StLoadImg>
              <input type="file" onChange={(e) => handleLoadFile(e)} />
              {loadedImg && <img src={loadedImg} alt="첨부이미지" />}
              <p>
                <strong>*첨부가능 확장자:</strong> 이미지(jpg, gif, bmp, png, jpeg) ,워드문서(hwp, ppt, pptx, xls, xlsx,
                doc, docx, zip, pdf, txt)
              </p>
            </StLoadImg>
          </tr>
        </StInquiryBody>
      </table>

      <StButtonWrapper>
        <IcCancelButton />
        <button type="submit">
          <IcSendButton />
        </button>
      </StButtonWrapper>
    </StInquiryForm>
  );
};

const StInquiryForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100rem;

  margin-top: 9.6rem;
`;

const StInquiryBody = styled.tbody`
  > tr {
    display: flex;
    align-items: center;

    height: 7.1rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray40};

    > th {
      width: 9.5rem;
      padding-left: 1.7rem;

      font-weight: 350;
      font-size: 1.6rem;

      color: ${({ theme }) => theme.colors.gray80};

      > em {
        color: ${({ theme }) => theme.colors.red2};
      }
    }

    > td {
      display: flex;
      margin-left: 2.7rem;
      > label {
        display: flex;
        align-items: center;

        margin-right: 2.1rem;

        > p {
          margin-left: 0.9rem;

          font-family: 700;
          font-size: 1.6rem;
        }
      }
      > select {
        margin-right: 0.9rem;
      }
    }
  }

  > tr:nth-of-type(4) {
    height: 19.6rem;

    > td > input {
      width: 87.3rem;
      height: 14.5rem;

      border-left: none;
      border-right: none;

      border-top: 0.1rem solid ${({ theme }) => theme.colors.gray40};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray40};
    }
  }

  > tr:nth-of-type(5) {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    height: auto;
  }
`;

const StTitleInput = styled.input`
  width: 86.7rem;
`;

const StLoadImg = styled.td`
  display: flex;
  flex-direction: column;
  > img {
    width: 25rem;
    height: 17rem;

    margin-top: 1.4rem;

    border-radius: 1rem;
  }

  > p {
    margin-top: 1.4rem;

    font-family: 350;
    > strong {
      font-family: 700;

      color: ${({ theme }) => theme.colors.gray70};
    }
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3.8rem;

  > svg {
    cursor: pointer;
  }

  > button {
    border: none;

    background-color: transparent;
  }
`;

export default InquiryForm;
