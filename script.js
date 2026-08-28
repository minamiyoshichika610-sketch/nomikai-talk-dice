// =====================
// 要素を取得
// =====================

// 画面
const memberScreen = document.getElementById('member-screen');
const gameScreen = document.getElementById('game-screen');

// メンバー登録
const memberNameInput = document.getElementById('member-name');
const addMemberButton = document.getElementById('add-member-button');
const memberList = document.getElementById('member-list');
const memberNextButton = document.getElementById('member-next-button');

// メンバー編集に戻るボタン
const backToMemberButton = document.getElementById(
  'back-to-member-button'
);

// 回答者の選択
const memberModeInputs = document.querySelectorAll(
  'input[name="member-mode"]'
);

const memberSelect = document.getElementById(
  'member-select'
);

// ゲーム画面
const dice = document.getElementById('dice');
const rollButton = document.getElementById('roll-button');

const genreResult = document.getElementById('genre-result');
const memberResult = document.getElementById('member-result');
const topicResult = document.getElementById('topic-result');

// ゲーム操作ボタン
const deepButton = document.getElementById('deep-button');
const favoriteButton = document.getElementById(
  'favorite-button'
);
const nextTopicButton = document.getElementById(
  'next-topic-button'
);


// =====================
// データ
// =====================

// 登録されたメンバー
const members = [];

// 今回選択されたジャンル
let selectedGenres = [];

// 今回選ばれたジャンル
let currentGenre = '';

// 今回選ばれた回答者
let currentMember = '';

// 今回選ばれた話題
let currentTopic = null;

// 使用済みの話題
const usedTopics = [];

// 盛り上がった話題
const favoriteTopics = [];


// =====================
// ジャンルごとの話題
// =====================

const topics = {

  '😂 面白い': [

    {
      question:
        '今までで一番意味がわからなかった出来事は？',

      deep:
        'そのとき周りの人はどんな反応だった？'
    },

    {
      question:
        '人生で一番恥ずかしかった失敗は？',

      deep:
        '今思い出しても恥ずかしいポイントはどこ？'
    },

    {
      question:
        '最近一番笑ったことは？',

      deep:
        'なんでそんなに面白かったと思う？'
    }

  ],


  '❤️ 恋愛': [

    {
      question:
        '今までで一番キュンとした瞬間は？',

      deep:
        'その人のどんなところに惹かれた？'
    },

    {
      question:
        '好きな人ができたら態度に出る？',

      deep:
        '周りの人にはすぐバレるタイプ？'
    },

    {
      question:
        '理想のデートは？',

      deep:
        '相手にはどんなことをしてほしい？'
    }

  ],


  '💀 黒歴史': [

    {
      question:
        '今だから言える黒歴史は？',

      deep:
        'もし当時の自分に会えたら何て言う？'
    },

    {
      question:
        '学生時代に一番恥ずかしかったことは？',

      deep:
        'その場から逃げたくなった？'
    },

    {
      question:
        '過去に戻れるなら消したい出来事は？',

      deep:
        'その出来事から学んだことはある？'
    }

  ],


  '🤔 深い話': [

    {
      question:
        '人生で一番大切にしていることは？',

      deep:
        'それを大切にするようになったきっかけは？'
    },

    {
      question:
        '10年前の自分に何を伝えたい？',

      deep:
        '逆に10年前の自分から学べそうなことは？'
    },

    {
      question:
        '自分の人生を変えた出来事は？',

      deep:
        'もしその出来事がなかったら今どうなっていたと思う？'
    }

  ],


  '🔥 暴露': [

    {
      question:
        'この中で第一印象と一番違った人は？',

      deep:
        '最初はどんな印象だった？'
    },

    {
      question:
        '今まで誰にも言っていなかった秘密は？',

      deep:
        'なぜ今まで誰にも言わなかった？'
    },

    {
      question:
        '実は最近気になっていることは？',

      deep:
        'それについて誰かに相談したことはある？'
    }

  ],


  '⚔️ 究極の選択': [

    {
      question:
        '一生スマホなしと一生恋愛なし、どっちを選ぶ？',

      deep:
        '選ばなかった方を失ったら一番困ることは？'
    },

    {
      question:
        '100万円もらえるけど友達全員に秘密を1つ知られる。やる？',

      deep:
        'その秘密を知られたら一番困る相手は誰？'
    },

    {
      question:
        '過去に戻るか、未来を見るか？',

      deep:
        '実際に何を知りたい？'
    }

  ]

};


// =====================
// 画面を切り替える関数
// =====================

function showScreen(screen) {

  // すべての画面を非表示
  memberScreen.classList.add('hidden');

  gameScreen.classList.add('hidden');


  // 指定された画面だけ表示
  screen.classList.remove('hidden');

}


// =====================
// メンバー追加
// =====================

function addMember() {

  // 入力された名前を取得
  const name =
    memberNameInput.value.trim();


  // 名前が空の場合
  if (name === '') {

    alert('名前を入力してください');

    return;
  }


  // 同じ名前がすでにある場合
  if (members.includes(name)) {

    alert('同じ名前はすでに登録されています');

    return;
  }


  // メンバー配列に追加
  members.push(name);


  // 入力欄を空にする
  memberNameInput.value = '';


  // メンバー一覧を更新
  renderMembers();


  // プルダウンも更新
  updateMemberSelect();


  // 入力欄にカーソルを戻す
  memberNameInput.focus();

}


// =====================
// メンバー一覧を表示
// =====================

function renderMembers() {

  // 一度中身を空にする
  memberList.innerHTML = '';


  // メンバーを1人ずつ表示
  members.forEach((member, index) => {

    // メンバーの要素を作成
    const memberItem =
      document.createElement('div');

    memberItem.classList.add(
      'member-item'
    );


    // 名前
    const memberName =
      document.createElement('span');

    memberName.textContent =
      `👤 ${member}`;


    // 削除ボタン
    const deleteButton =
      document.createElement('button');

    deleteButton.textContent = '×';

    deleteButton.classList.add(
      'delete-member-button'
    );


    // 削除ボタンが押された場合
    deleteButton.addEventListener(
      'click',
      () => {

        // 配列から削除
        members.splice(index, 1);


        // 再表示
        renderMembers();


        // プルダウンを更新
        updateMemberSelect();

      }
    );


    // 名前を追加
    memberItem.appendChild(
      memberName
    );


    // 削除ボタンを追加
    memberItem.appendChild(
      deleteButton
    );


    // メンバー一覧に追加
    memberList.appendChild(
      memberItem
    );

  });

}


// =====================
// 回答者選択プルダウンを更新
// =====================

function updateMemberSelect() {

  // 中身を一度空にする
  memberSelect.innerHTML = '';


  // 最初の選択肢
  const defaultOption =
    document.createElement('option');

  defaultOption.value = '';

  defaultOption.textContent =
    '回答者を選択してください';

  memberSelect.appendChild(
    defaultOption
  );


  // 登録メンバーを追加
  members.forEach((member) => {

    const option =
      document.createElement('option');

    option.value = member;

    option.textContent =
      `👤 ${member}`;

    memberSelect.appendChild(
      option
    );

  });

}


// =====================
// メンバー登録画面 → ゲーム画面
// =====================

function startGame() {

  // メンバーがいない場合
  if (members.length === 0) {

    alert(
      '参加メンバーを1人以上追加してください'
    );

    return;
  }


  // ゲーム画面を表示
  showScreen(gameScreen);


  // 結果を初期化
  genreResult.textContent = '？';

  memberResult.textContent = '？';

  topicResult.textContent =
    '🎲 サイコロを振ってスタート！';


  // 現在のデータを初期化
  currentGenre = '';

  currentMember = '';

  currentTopic = null;


  // お気に入りボタンを元に戻す
  favoriteButton.textContent =
    '⭐ 盛り上がった！';

}


// =====================
// ゲーム画面 → メンバー登録画面
// =====================

function goToMemberScreen() {

  showScreen(memberScreen);

}


// =====================
// 回答者の決め方を取得
// =====================

function getMemberMode() {

  const checkedMode =
    document.querySelector(
      'input[name="member-mode"]:checked'
    );

  return checkedMode.value;

}


// =====================
// 回答者選択モード変更
// =====================

function changeMemberMode() {

  const mode =
    getMemberMode();


  // 自分で選ぶ場合
  if (mode === 'select') {

    memberSelect.disabled = false;

  } else {

    // ランダムの場合
    memberSelect.disabled = true;

    memberSelect.value = '';

  }

}


// =====================
// 選択されたジャンルを取得
// =====================

function getSelectedGenres() {

  const checkedGenres =
    document.querySelectorAll(
      '.genre-list input:checked'
    );


  // ジャンルが選ばれていない場合
  if (checkedGenres.length === 0) {

    alert(
      'ジャンルを1つ以上選んでください'
    );

    return null;
  }


  // 選択されたジャンルを配列にする
  const genres = [];


  checkedGenres.forEach((genre) => {

    genres.push(
      genre.value
    );

  });


  return genres;

}


// =====================
// ランダムな要素を取得
// =====================

function getRandomItem(array) {

  const randomIndex =
    Math.floor(
      Math.random() * array.length
    );

  return array[randomIndex];

}


// =====================
// サイコロを振る
// =====================

function rollDice() {

  // 選択されているジャンルを取得
  selectedGenres =
    getSelectedGenres();


  // ジャンルが選択されていない場合
  if (selectedGenres === null) {

    return;
  }


  // 回答者の決め方を取得
  const memberMode =
    getMemberMode();


  // 自分で選ぶモードの場合
  if (
    memberMode === 'select' &&
    memberSelect.value === ''
  ) {

    alert(
      '回答者を選択してください'
    );

    return;
  }


  // 自分で選んだ回答者
  const selectedMember =
    memberSelect.value;


  // ボタン連打防止
  rollButton.disabled = true;


  // 他の操作ボタンも一時的に無効
  deepButton.disabled = true;

  favoriteButton.disabled = true;

  nextTopicButton.disabled = true;


  // 前の話題を初期化
  currentTopic = null;


  // お気に入りボタンを元に戻す
  favoriteButton.textContent =
    '⭐ 盛り上がった！';


  // サイコロを回転
  dice.classList.add('rolling');


  // 結果を高速で切り替える
  const intervalId =
    setInterval(() => {

      // ジャンルをランダム表示
      genreResult.textContent =
        getRandomItem(selectedGenres);


      // 回答者がランダムの場合
      if (memberMode === 'random') {

        memberResult.textContent =
          `👤 ${getRandomItem(members)}`;

      } else {

        // 自分で選択した場合
        memberResult.textContent =
          `👤 ${selectedMember}`;

      }

    }, 100);


  // 1秒後に結果を決定
  setTimeout(() => {

    // ランダム表示を停止
    clearInterval(intervalId);


    // ジャンルを決定
    currentGenre =
      getRandomItem(selectedGenres);


    // 回答者を決定
    if (memberMode === 'random') {

      currentMember =
        getRandomItem(members);

    } else {

      currentMember =
        selectedMember;

    }


    // 最終結果を表示
    genreResult.textContent =
      currentGenre;

    memberResult.textContent =
      `👤 ${currentMember}`;


    // 話題を決定
    selectTopic();


    // サイコロ停止
    dice.classList.remove('rolling');


    // ボタンを有効化
    rollButton.disabled = false;

    deepButton.disabled = false;

    favoriteButton.disabled = false;

    nextTopicButton.disabled = false;

  }, 1000);

}


// =====================
// 話題を選ぶ
// =====================

function selectTopic() {

  // 選ばれたジャンルの話題一覧
  const genreTopics =
    topics[currentGenre];


  // まだ使われていない話題だけ取得
  let availableTopics =
    genreTopics.filter((topic) => {

      return !usedTopics.includes(
        topic.question
      );

    });


  // 全部使い切った場合
  if (availableTopics.length === 0) {

    // 使用済み履歴をリセット
    usedTopics.length = 0;


    // もう一度すべて使用可能にする
    availableTopics =
      [...genreTopics];

  }


  // ランダムで話題を選択
  const selectedTopic =
    getRandomItem(
      availableTopics
    );


  // 現在の話題として保存
  currentTopic =
    selectedTopic;


  // 使用済みに追加
  usedTopics.push(
    selectedTopic.question
  );


  // 話題を表示
  topicResult.textContent =
    selectedTopic.question;

}


// =====================
// さらに深く聞く
// =====================

function showDeepQuestion() {

  // まだ話題が選ばれていない場合
  if (!currentTopic) {

    alert(
      '先にサイコロを振ってください'
    );

    return;
  }


  // 深掘り質問を表示
  topicResult.textContent =
    `🔥 ${currentTopic.deep}`;

}


// =====================
// 盛り上がった話題に追加
// =====================

function addFavoriteTopic() {

  // 話題が選ばれていない場合
  if (!currentTopic) {

    alert(
      '先にサイコロを振ってください'
    );

    return;
  }


  // まだ保存されていない場合
  if (
    !favoriteTopics.includes(
      currentTopic.question
    )
  ) {

    favoriteTopics.push(
      currentTopic.question
    );

    favoriteButton.textContent =
      '⭐ 保存しました！';

  } else {

    favoriteButton.textContent =
      '⭐ すでに保存済み！';

  }

}


// =====================
// 次の話題
// =====================

function nextTopic() {

  // 現在の設定のまま
  // もう一度サイコロを振る
  rollDice();

}


// =====================
// イベント
// =====================


// メンバー追加
addMemberButton.addEventListener(
  'click',
  addMember
);


// Enterキーでも追加
memberNameInput.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Enter') {

      addMember();

    }

  }
);


// ゲーム開始
memberNextButton.addEventListener(
  'click',
  startGame
);


// メンバー編集に戻る
backToMemberButton.addEventListener(
  'click',
  goToMemberScreen
);


// 回答者モード変更
memberModeInputs.forEach((input) => {

  input.addEventListener(
    'change',
    changeMemberMode
  );

});


// サイコロ
rollButton.addEventListener(
  'click',
  rollDice
);


// 深掘り
deepButton.addEventListener(
  'click',
  showDeepQuestion
);


// 盛り上がった
favoriteButton.addEventListener(
  'click',
  addFavoriteTopic
);


// 次の話題
nextTopicButton.addEventListener(
  'click',
  nextTopic
);