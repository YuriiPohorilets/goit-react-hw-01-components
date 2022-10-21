# Components | goit-react-hw-01
## Критерии приема
Используй этот [шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme) как стартовую точку своего приложения.

- Создан репозиторий `goit-react-hw-01-components`.
- Компоненты всех заданий рендерятся на одной странице, внутри общего контейнера - корневого компонента `<App>`.
- При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
- В шапке репозитория есть ссылка на живую страницу на `GitHub pages`.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нет ошибок и предупреждений.
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
- Для всех компонентов описаны `propTypes`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- Имена компонентов понятные, описательные.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`, поэтому классы в результирующем DOM будут отличаться от примеров.

### 1 - Профиль социальной сети
Необходимо создать компонент `Profile`, с помощью которого мы могли бы отображать информацию о пользователе социальной сети. Данные о пользователе лежат в файле [user.json](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Fsocial-profile%2Fuser.json).

![social-profile](https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/social-profile.png)

#### Описание компонента `Profile`
Компонент должен принимать несколько пропсов с информацией о пользователе:

- `username` — имя пользователя
- `tag` — тег в социальной сети без `@`
- `location` — город и страна
- `avatar` — ссылка на изображение
- `stats` — объект с информацией об активности

Компонент должен создавать DOM элемент следующей структуры.
```
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

#### Пример использования
```
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

### 2- Секция статистики
Создать компонет `Statistics`, который бы отображал статистику по переданным пропам. Например, загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые траты и т. п. Данные о статистике лежат в файле [data.json](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Fstatistics%2Fdata.json).

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/statistics.jpg)

#### Описание компонента `Statistics`
Компонент должен принимать два пропа `title` и `stats`, в которых указывается заголовок и объект статистики.

- `title` - не обязателен, и если он не передан, не должна рендериться разметка заголовка `<h2>`.
- `stats` - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
- Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
Компонент должен создавать DOM элемент следующей структуры.
```
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```
#### Пример использования
```
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```
### 3 - Список друзей
Необходимо создать компонент `FriendList`, с помощью которого мы могли бы отображать информацию о друзьях пользователя. Информация о друзьях хранится в файле [friends.json](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Ffriend-list%2Ffriends.json).

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/friend-list.jpg)
#### Описание компонента `FriendList`
Компонент должен принимать один пропс `friends` - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.
```
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>
```
#### Описание компонента `FriendListItem`
Компонент должен принимать несколько пропов:

- `avatar` - ссылка на аватар
- `name` - имя друга
- `isOnline` - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа `isOnline`, должен меняться цвет фона `span.status`. Это можно сделать через разный `CSS-класс` или `Styled Components`.

Компонент должен создавать DOM следующей структуры.
```
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```
#### Пример использования
```
import friends from "path/to/friends.json";

<FriendList friends={friends} />;
```
### 4 - История транзакций
Необходимо создать компонент истории транзакций в личном кабинете интернет банка.

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/transactions.jpg)
Данные для списка доступны в формате JSON в файле [transactions.json](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Ftransaction-history%2Ftransactions.json). Это массив объектов, где каждый объект описывает одну транзакцию со следующими свойствами:

- `id` — уникальный идентификатор транзакции
- `type` — тип транзакции
- `amount` - сумма транзакции
- `currency` - тип валюты

#### Описание компонента `TransactionHistory`
Необходимо создать компонент TransactionHistory принимающий один проп items - массив объектов транзакций из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций.
```
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```
#### Пример использования
```
import transactions from "path/to/transactions.json";

<TransactionHistory items={transactions} />;
```
