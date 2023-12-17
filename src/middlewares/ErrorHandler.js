export default ErrorHandler = (err, req, res, next) => {
	console.log('에러처리 미들웨어 구동중 입니다.=>', err);
	const errorCodeMap = {
		'이름을 입력해 주세요': 400,
		'이메일을 입력해 주세요': 400,
		'이메일을 확인해 주세요': 400,
		'10살 이상, 90살 이하만 가입이 가능합니다.': 400,
		'비밀번호를 입력해 주세요': 400,
		'비밀번호는 6자리 이상이여야 합니다.': 400,
		'비밀번호가 일치하지 않습니다.': 400,
		'이미지를 넣어주세요': 400,
		'주소를 입력해 주세요': 400,
		'내용을 입력해 주세요.': 400,
		'펫 시터에게 평점을 남겨주세요.': 400,
		'이미 가입 된 이메일입니다.': 400,
		'사용자가 존재하지 않습니다.': 404,
		'비밀번호가 틀립니다.': 400,
		'이미 가입 된 이메일입니다.': 400,
		'스케줄을 조회할 수 없습니다.': 404,
		'스케쥴을 입력해주세요.': 400,
		'과거 날짜이거나 30일 이후의 날짜는 스케쥴로 등록할 수 없습니다.': 400,
		'날짜를 다시 확인해주세요.': 403,
		'해당하는 스케쥴이 존재하지 않습니다.': 404,
		'권한이 없습니다.': 401,
		'해당하는 스케쥴이 존재하지 않습니다.': 404,
		'해당하는 펫 시터를 찾을 수 없습니다.': 404,
		'이미 삭제된 예약건입니다.': 404,
		'작성자가 아님으로 권한이 없습니다.': 401,
		'이미 예약된 날짜입니다.': 403,
		'잠시후 다시 예약해 주세요': 403,
		'예약 정보를 찾을 수 없습니다.': 400,
		'예약한 펫시터만 리뷰를 남길 수 있습니다.': 403
	};
	switch (err.message) {
		case '이름을 입력해 주세요.':
			return;
	}
};
