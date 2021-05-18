
/***
 *  1. 打开/创建一个 IndexedDB 数据库（当该数据库不存在时，open 方法会直接创建一个名为 admin 新数据库）
 *  var request = window.indexedDB.open(databaseName, version);
 * 
 *  2. 创建一个 object store（object store 对标到数据库中的“表”单位）
 * 
 *  3. 构建一个事务来执行一些数据库操作，像增加或提取数据等
 *  4. 通过监听正确类型的事件以等待操作完成。
 * 
 * 
 * 
 *  */ 


  // 后面的回调中，我们可以通过event.target.result拿到数据库实例
  let db
  // 参数1位数据库名，参数2为版本号
  const request = window.indexedDB.open("admin", 1)
  // 使用IndexedDB失败时的监听函数
  request.onerror = function(event) {
     console.log('无法使用IndexedDB')
   }
  // 成功
  request.onsuccess  = function(event){
    // 此处就可以获取到db实例
    db = event.target.result
    console.log("你打开了IndexedDB")
  }

  // onupgradeneeded事件会在初始化数据库/版本发生更新时被调用，我们在它的监听函数中创建object store
  request.onupgradeneeded = function(event){
    let objectStore
    // 如果同名表未被创建过，则新建test表
    if (!db.objectStoreNames.contains('test')) {
      objectStore = db.createObjectStore('test', { keyPath: 'id' })

      // index 
      // IDBObject.createIndex()的三个参数分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）。
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
    }
  }

   // 创建事务，指定表格名称和读写权限
   const transaction = db.transaction(["test"],"readwrite")
   // 拿到Object Store对象
   const objectStore = transaction.objectStore("test")
   // 向表格写入数据
   objectStore.add({id: 1, name: 'juejin'})

   // 操作成功时的监听函数
  transaction.oncomplete = function(event) {
    console.log("操作成功")
  }
  // 操作失败时的监听函数
  transaction.onerror = function(event) {
    console.log("这里有一个Error")
  }

  function read() {
    var transaction = db.transaction(['person']);
    var objectStore = transaction.objectStore('person');
    var request = objectStore.get(1);
 
    request.onerror = function(event) {
      console.log('事务失败');
    };
 
    request.onsuccess = function( event) {
       if (request.result) {
         console.log('Name: ' + request.result.name);
         console.log('Age: ' + request.result.age);
         console.log('Email: ' + request.result.email);
       } else {
         console.log('未获得数据记录');
       }
    };
 }

function readAll() {
  var objectStore = db.transaction('person').objectStore('person');

   objectStore.openCursor().onsuccess = function (event) {
     var cursor = event.target.result;

     if (cursor) {
       console.log('Id: ' + cursor.key);
       console.log('Name: ' + cursor.value.name);
       console.log('Age: ' + cursor.value.age);
       console.log('Email: ' + cursor.value.email);
       cursor.continue();
    } else {
      console.log('没有更多数据了！');
    }
  };
}

function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });

  request.onsuccess = function (event) {
    console.log('数据更新成功');
  };

  request.onerror = function (event) {
    console.log('数据更新失败');
  }
}

function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);

  request.onsuccess = function (event) {
    console.log('数据删除成功');
  };
}

function index() {
  var transaction = db.transaction(['person'], 'readonly');
  var store = transaction.objectStore('person');
  var index = store.index('name');
  var request = index.get('李四');

  request.onsuccess = function (e) {
    var result = e.target.result;
    if (result) {
      // ...
    } else {
      // ...
    }
  }
}