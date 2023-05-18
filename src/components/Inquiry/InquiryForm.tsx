import { styled } from 'styled-components';
import {
  INQUIRY_AREAS,
  INQUIRY_CONTENT_PLACEHOLDER,
  INQUIRY_THEATER_CHOICE_OPTIONS,
  INQUIRY_TYPES,
} from '../../constants/inquiry';

const InquiryForm = () => {
  return (
    <StInquiryForm>
      <table>
        <tbody>
          <tr>
            <th>문의유형*</th>
            <td>
              {INQUIRY_TYPES.map((type, idx) => (
                <label key={idx}>
                  <input type="radio" name="inquiryType" value={type} /> {type}
                </label>
              ))}
            </td>
          </tr>

          <tr>
            <th>영화관 선택</th>
            <td>
              {INQUIRY_THEATER_CHOICE_OPTIONS.map((type, idx) => (
                <label key={idx}>
                  <input type="radio" name="theaterChoice" value={type} /> {type}
                </label>
              ))}
              <select>
                <option selected={true} value="국내">
                  국내
                </option>
                <option value="국외">국외</option>
              </select>
              <select>
                <option value="">지역선택</option>
                {INQUIRY_AREAS.map((area, idx) => (
                  <option value={area} key={idx}>
                    {area}
                  </option>
                ))}
              </select>
              <select>
                <option value="">영화관 선택</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>제목*</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>내용*</th>
            <td>
              <input type="text" placeholder={INQUIRY_CONTENT_PLACEHOLDER} />
            </td>
          </tr>

          <tr>
            <th>첨부파일</th>
            <td>
              <input type="file" />
            </td>
          </tr>
        </tbody>
      </table>
    </StInquiryForm>
  );
};

const StInquiryForm = styled.form`
  display: flex;
  flex-direction: column;

  > tr {
    display: flex;
    align-items: center;
  }
`;

export default InquiryForm;
