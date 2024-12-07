document.addEventListener('DOMContentLoaded', function () {
    const notifyBtn = document.getElementById('notifyBtn');

    notifyBtn.addEventListener('click', function () {
        // 检查通知权限
        if (Notification.permission === "granted") {
            // 显示通知
            new Notification("Hello!", {
                body: "This is a notification from your web page.",
                icon: 'icon.png' // 确保你的网页目录中有这个图标文件
            });
        } else {
            // 请求通知权限
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Hello!", {
                        body: "This is a notification from your web page.",
                        icon: 'icon.png'
                    });
                }
            });
        }
    });
});