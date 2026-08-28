// =====================
// 要素取得
// =====================

const memberScreen =
  document.getElementById('member-screen');

const gameScreen =
  document.getElementById('game-screen');

const memberNameInput =
  document.getElementById('member-name');

const addMemberButton =
  document.getElementById('add-member-button');

const memberList =
  document.getElementById('member-list');

const memberNextButton =
  document.getElementById('member-next-button');

const memberSelect =
  document.getElementById('member-select');

const rollButton =
  document.getElementById('roll-button');

const dice =
  document.getElementById('dice');

const genreResult =
  document.getElementById('genre-result');

const memberResult =
  document.getElementById('member-result');

const topicResult =
  document.getElementById('topic-result');

const nextTopicButton =
  document.getElementById('next-topic-button');

const backToMemberButton =
  document.getElementById('back-to-member-button');


// =====================
// 特殊要素
// =====================

const missionBlock =
  document.getElementById('mission-block');

const missionResult =
  document.getElementById('mission-result');

const eventBlock =
  document.getElementById('event-block');

const eventResult =
  document.getElementById('event-result');

const specialModeBlock =
  document.getElementById('special-mode-block');

const specialModeResult =
  document.getElementById('special-mode-result');


// =====================
// メンバー情報
// =====================

const members = [];


// =====================
// 現在の話題情報
// =====================

let currentGenre = '';
let currentTopic = '';
let currentMember = '';


// =====================
// JSONデータ
// =====================

let gameData = null;


// =====================
// ジャンルごとのサイコロ
// =====================

const diceStyles = {

  '😂 面白い': '😂',

  '❤️ 恋愛': '❤️',

  '💀 黒歴史': '💀',

  '🤔 深い話': '🤔',

  '🔥 暴露': '🔥',

  '⚔️ 究極の選択': '⚔️'

};


// =====================
// data.jsonを読み込む
// =====================

async function loadGameData() {

  try {

    const response =
      await fetch('./data.json');


    if (!response.ok) {

      throw new Error(
        'data.jsonの読み込みに失敗しました'
      );

    }


    gameData =
      await response.json();


    console.log(
      'data.jsonの読み込みに成功しました'
    );


    rollButton.disabled = false;

  } catch (error) {

    console.error(error);


    alert(
      'ゲームデータの読み込みに失敗しました。\n' +
      'data.jsonが同じフォルダにあるか確認してください。'
    );


    rollButton.disabled = true;

  }

}


// =====================
// メンバー追加
// =====================

function addMember() {

  const name =
    memberNameInput.value.trim();


  if (name === '') {

    memberNameInput.focus();

    return;

  }


  if (members.includes(name)) {

    alert(
      '同じ名前がすでに登録されています'
    );

    return;

  }


  members.push(name);


  memberNameInput.value = '';


  renderMembers();


  memberNameInput.focus();

}


// =====================
// メンバー一覧表示
// =====================

function renderMembers() {

  memberList.innerHTML = '';


  memberSelect.innerHTML =
    '<option value="">回答者を選択してください</option>';


  members.forEach(
    (member, index) => {

      // =====================
      // メンバー表示
      // =====================

      const memberItem =
        document.createElement('div');


      memberItem.classList.add(
        'member-item'
      );


      const nameElement =
        document.createElement('span');


      nameElement.textContent =
        member;


      // =====================
      // 削除ボタン
      // =====================

      const deleteButton =
        document.createElement('button');


      deleteButton.textContent =
        '削除';


      deleteButton.classList.add(
        'delete-member-button'
      );


      deleteButton.addEventListener(
        'click',
        () => {

          members.splice(
            index,
            1
          );


          renderMembers();

        }
      );


      memberItem.appendChild(
        nameElement
      );


      memberItem.appendChild(
        deleteButton
      );


      memberList.appendChild(
        memberItem
      );


      // =====================
      // 回答者選択
      // =====================

      const option =
        document.createElement('option');


      option.value =
        member;


      option.textContent =
        member;


      memberSelect.appendChild(
        option
      );

    }
  );

}


// =====================
// Enterキーでメンバー追加
// =====================

memberNameInput.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Enter') {

      addMember();

    }

  }
);


// =====================
// 追加ボタン
// =====================

addMemberButton.addEventListener(
  'click',
  addMember
);


// =====================
// ゲーム開始
// =====================

memberNextButton.addEventListener(
  'click',
  () => {

    if (members.length === 0) {

      alert(
        '参加メンバーを1人以上追加してください'
      );

      return;

    }


    if (gameData === null) {

      alert(
        'ゲームデータを読み込んでいます。\n少し待ってからもう一度押してください。'
      );

      return;

    }


    memberScreen.classList.add(
      'hidden'
    );


    gameScreen.classList.remove(
      'hidden'
    );

  }
);


// =====================
// メンバー編集に戻る
// =====================

backToMemberButton.addEventListener(
  'click',
  () => {

    gameScreen.classList.add(
      'hidden'
    );


    memberScreen.classList.remove(
      'hidden'
    );

  }
);


// =====================
// 回答者モード切り替え
// =====================

const memberModes =
  document.querySelectorAll(
    'input[name="member-mode"]'
  );


memberModes.forEach(
  (mode) => {

    mode.addEventListener(
      'change',
      () => {

        if (mode.value === 'select') {

          memberSelect.disabled =
            false;

        } else {

          memberSelect.disabled =
            true;

        }

      }
    );

  }
);


// =====================
// ランダムな要素を取得
// =====================

function getRandomItem(array) {

  if (!array || array.length === 0) {

    return '';

  }


  const randomIndex =
    Math.floor(
      Math.random() * array.length
    );


  return array[randomIndex];

}


// =====================
// 選択されたジャンルを取得
// =====================

function getSelectedGenres() {

  const checkedGenres =
    document.querySelectorAll(
      '.genre-list input:checked'
    );


  const genres = [];


  checkedGenres.forEach(
    (genre) => {

      genres.push(
        genre.value
      );

    }
  );


  return genres;

}


// =====================
// 回答者を決定
// =====================

function getSelectedMember() {

  const selectedMode =
    document.querySelector(
      'input[name="member-mode"]:checked'
    ).value;


  // =====================
  // 自分で選ぶ
  // =====================

  if (selectedMode === 'select') {

    if (memberSelect.value === '') {

      return null;

    }


    return memberSelect.value;

  }


  // =====================
  // ランダム
  // =====================

  return getRandomItem(
    members
  );

}


// =====================
// 特殊要素をすべて非表示
// =====================

function hideSpecialBlocks() {

  missionBlock.classList.add(
    'hidden'
  );


  eventBlock.classList.add(
    'hidden'
  );


  specialModeBlock.classList.add(
    'hidden'
  );

}


// =====================
// 特殊モード判定
// =====================
//
// 通常       約75%
// ミッション 約10%
// イベント   約10%
// スペシャル 約5%
//
// 合計100%
// =====================

function getRandomMode() {

  const random =
    Math.random();


  // =====================
  // 約75%：通常
  // =====================

  if (random < 0.75) {

    return 'normal';

  }


  // =====================
  // 約10%：ミッション
  // =====================

  if (random < 0.85) {

    return 'mission';

  }


  // =====================
  // 約10%：特殊イベント
  // =====================

  if (random < 0.95) {

    return 'event';

  }


  // =====================
  // 約5%：スペシャル
  // =====================

  return 'special';

}


// =====================
// 特殊要素を表示
// =====================

function showSpecialMode(mode) {

  // =====================
  // ミッション
  // =====================

  if (mode === 'mission') {

    const mission =
      getRandomItem(
        gameData.missions
      );


    missionResult.textContent =
      mission;


    missionBlock.classList.remove(
      'hidden'
    );

  }


  // =====================
  // 特殊イベント
  // =====================

  if (mode === 'event') {

    const event =
      getRandomItem(
        gameData.specialEvents
      );


    eventResult.innerHTML =
      `
      ${event.title}
      <br>
      ${event.description}
      `;


    eventBlock.classList.remove(
      'hidden'
    );

  }


  // =====================
  // スペシャルモード
  // =====================

  if (mode === 'special') {

    const special =
      getRandomItem(
        gameData.specialModes
      );


    specialModeResult.innerHTML =
      `
      ${special.title}
      <br>
      ${special.description}
      `;


    specialModeBlock.classList.remove(
      'hidden'
    );

  }

}


// =====================
// サイコロを振る
// =====================

function rollDice() {

  // =====================
  // JSON読み込み確認
  // =====================

  if (gameData === null) {

    alert(
      'ゲームデータを読み込んでいます。\n少し待ってください。'
    );

    return;

  }


  // =====================
  // ジャンル確認
  // =====================

  const genres =
    getSelectedGenres();


  if (genres.length === 0) {

    alert(
      'ジャンルを1つ以上選択してください'
    );

    return;

  }


  // =====================
  // 回答者確認
  // =====================

  const selectedMember =
    getSelectedMember();


  if (selectedMember === null) {

    alert(
      '回答者を選択してください'
    );

    return;

  }


  // =====================
  // ボタン連打防止
  // =====================

  rollButton.disabled =
    true;


  nextTopicButton.disabled =
    true;


  // =====================
  // 前回の特殊表示を消す
  // =====================

  hideSpecialBlocks();


  // =====================
  // 表示を初期化
  // =====================

  genreResult.textContent =
    '🎲';


  memberResult.textContent =
    '🎲';


  topicResult.textContent =
    'サイコロを振っています...';


  // =====================
  // サイコロ初期化
  // =====================

  dice.textContent =
    '🎲';


  dice.classList.remove(
    'rolling'
  );


  // アニメーションを強制的に再スタート

  void dice.offsetWidth;


  dice.classList.add(
    'rolling'
  );


  // =====================
  // アニメーション中
  // =====================

  const intervalId =
    setInterval(
      () => {

        const randomGenre =
          getRandomItem(
            genres
          );


        genreResult.textContent =
          randomGenre;


        memberResult.textContent =
          getRandomItem(
            members
          );


        dice.textContent =
          diceStyles[randomGenre];

      },
      100
    );


  // =====================
  // 1秒後に結果決定
  // =====================

  setTimeout(
    () => {

      clearInterval(
        intervalId
      );


      // =====================
      // 最終ジャンル
      // =====================

      currentGenre =
        getRandomItem(
          genres
        );


      // =====================
      // 最終回答者
      // =====================

      currentMember =
        selectedMember;


      // =====================
      // お題取得
      // =====================

      const genreTopics =
        gameData.topics[
          currentGenre
        ];


      if (
        !genreTopics ||
        genreTopics.length === 0
      ) {

        currentTopic =
          'このジャンルのお題がありません。';

      } else {

        currentTopic =
          getRandomItem(
            genreTopics
          );

      }


      // =====================
      // 結果表示
      // =====================

      genreResult.textContent =
        currentGenre;


      memberResult.textContent =
        currentMember;


      topicResult.textContent =
        currentTopic;


      // =====================
      // ジャンル別サイコロ
      // =====================

      dice.textContent =
        diceStyles[currentGenre];


      // =====================
      // 特殊要素判定
      // =====================

      const mode =
        getRandomMode();


      // =====================
      // 特殊要素表示
      // =====================

      showSpecialMode(
        mode
      );


      // =====================
      // アニメーション終了
      // =====================

      dice.classList.remove(
        'rolling'
      );


      // =====================
      // ボタン復活
      // =====================

      rollButton.disabled =
        false;


      nextTopicButton.disabled =
        false;

    },
    1000
  );

}


// =====================
// 次の話題
// =====================

function nextTopic() {

  rollDice();

}


// =====================
// ボタンイベント
// =====================

rollButton.addEventListener(
  'click',
  rollDice
);


nextTopicButton.addEventListener(
  'click',
  nextTopic
);


// =====================
// 初期処理
// =====================

// JSON読み込み中は
// サイコロを押せないようにする

rollButton.disabled =
  true;


// data.jsonを読み込む

loadGameData();
