export const convertURLtoFile = (url: string) => {
  let base64Url = url.split(',')[1];

  let byteString = atob(base64Url);

  // 이진 데이터를 저장할 ArrayBuffer를 생성합니다.
  let buffer = new ArrayBuffer(byteString.length);

  // ArrayBuffer에 이진 데이터를 복사합니다.
  let array = new Uint8Array(buffer);
  for (var i = 0; i < byteString.length; i++) {
    array[i] = byteString.charCodeAt(i);
  }

  // ArrayBuffer를 사용하여 Blob 객체를 생성합니다.
  let blob = new Blob([buffer]);

  // Blob 객체를 사용하여 파일 객체를 생성합니다.
  return new File([blob], 'image.png', { type: 'image/png' });
};
