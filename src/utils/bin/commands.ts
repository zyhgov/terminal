// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'info' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
This website is my first all English terminal website, and compared to Chinese websites, it is still challenging.
I am a student majoring in Big Data Technology Application at the School of Information Technology, Xiangyang Vocational and Technical College. I am currently working at State Grid Corporation of China, engaged in data processing work.
More about me:
'info' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
export const website = async (args: string[]): Promise<string> => {
  return `感谢访问我们的在线平台。以下是我们的一些重要站点：
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.main}" target="_blank">杖雍皓™官网</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.gov}" target="_blank">政府政务网络安全门户</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.academy}" target="_blank">网络安全研究中心</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.cloud}" target="_blank">云端攻防演练平台</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.open}" target="_blank">开放网络靶场</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.docs}" target="_blank">系统文档中心</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website_urls.terminal}" target="_blank">在线终端实验室</a></u>
`;
};

export const ifconfig = async (args: string[]): Promise<string> => {
  return `
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::215:5dff:fe34:abcd%eth0  prefixlen 64  scopeid 0x20<link>
        ether 00:15:5d:34:ab:cd  txqueuelen 1000  (Ethernet)
        RX packets 1234567  bytes 123456789 (117.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 7654321  bytes 987654321 (941.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.0.215  netmask 255.255.255.0  broadcast 10.0.0.255
        inet6 fe80::a00:ffff:feff:1234%wlan0  prefixlen 64  scopeid 0x20<link>
        ether 00:22:33:44:55:66  txqueuelen 1000  (Ethernet)
        RX packets 987654  bytes 987654321 (941.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 123456  bytes 123456789 (117.7 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 1234  bytes 123456 (120.6 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1234  bytes 123456 (120.6 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1500
        inet 172.16.254.3  netmask 255.255.255.255  destination 172.16.254.1
        inet6 fe80::1234:5678:9abc:def0%tun0  prefixlen 64  scopeid 0x20<link>
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 500  (UNSPEC)
        RX packets 12345  bytes 1234567 (1.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 54321  bytes 54321098 (51.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
总用量 64
drwxr-xr-x  1 user user  4096  8月 20 15:30 .
drwxr-xr-x  1 root root   4096  7月  1 00:15 ..
-rw-------  1 user user     0   8月 20 15:29 .bash_history
-rw-r--r--  1 user user   220  4月  4  2022 .bash_logout
-rw-r--r--  1 user user  3526  4月  4  2022 .bashrc
drwx------  1 user user  4096  8月 18 10:15 .cache
drwxr-xr-x  1 user user  4096  8月 10 08:45 .config
drwxr-xr-x  1 user user  4096  8月  1 12:00 Desktop
drwxr-xr-x  1 user user  4096  8月  2 14:22 Documents
drwxr-xr-x  1 user user  4096  8月 20 15:30 Downloads
-rw-r--r--  1 user user  8980  4月  4  2022 examples.desktop
drwxr-xr-x  1 user user  4096  7月 20 18:11 Music
drwxr-xr-x  1 user user  4096  7月 20 18:11 Pictures
drwxr-xr-x  1 user user  4096  7月 20 18:11 Public
drwxr-xr-x  1 user user  4096  7月 20 18:11 Templates
drwxr-xr-x  1 user user  4096  7月 20 18:11 Videos
-rw-r--r--  1 user user   807  4月  4  2022 .profile
drwxr-xr-x  1 user user  4096  8月 15 09:11 Projects
drwxr-xr-x  1 user user  4096  8月 19 11:20 .ssh
drwxr-xr-x  1 user user  4096  8月 14 13:00 .vscode
-rw-r--r--  1 user user   123  8月 19 14:00 notes.txt
-rw-r--r--  1 user user  1280  8月 19 16:30 .viminfo
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `
Usage: sudo -h | -K | -k | -V
usage: sudo [-HPSb] [-p prompt] [-u username|#uid] {-e file [...] | -i | -s | <command>}
See the sudo(8) manual for more information.
    `;
  }

  const command = args.join(" ");

  switch (command) {
    case "-h":
    case "--help":
      return `
Sudo 版本 1.8.31
用法: sudo -h | -K | -k | -V
       sudo [-HPSb] [-p prompt] [-u username|#uid] {-e file [...] | -i | -s | <command>}
选项:
  -h, --help            显示帮助信息并退出。
  -V, --version         输出版本信息并退出。
  -u, --user=UID        以指定用户身份运行命令。
  -i, --login           运行一个登录 shell。
  -s, --shell           在 shell 中运行指定命令。
      `;
    case "-v":
      // 刷新凭证
      return `[sudo] password for user: ********\n密码已更新。`;
    case "-l":
      // 列出可用命令
      return `
用户 user 可在该系统上运行以下命令：
    (root) NOPASSWD: /sbin/reboot, /sbin/shutdown, /usr/bin/systemctl
    (ALL : ALL) ALL
      `;
    case "-i":
    case "-s":
    case "su":
    case "su -":
    case "-i":
      return `
[sudo] password for user: ********
正在取得 root 权限...
# 欢迎 root 用户，你现在拥有超级权限。
# 注意：请谨慎操作，误操作可能导致系统异常。
      `.trim();
    case "reboot":
    case "shutdown now":
      return `
[sudo] password for user: ********
系统将在 1 秒后关机/重启...
Broadcast message from root@localhost
        /dev/console; Mon Aug 26 15:30:00 CST 2024

The system is going down for reboot NOW!
      `;
    default:
      // 模拟任意命令执行成功
      if (command.startsWith("systemctl start ")) {
        const service = command.replace("systemctl start ", "");
        return `[sudo] password for user: ********\n正在启动服务 ${service}... OK`;
      } else if (command.startsWith("systemctl stop ")) {
        const service = command.replace("systemctl stop ", "");
        return `[sudo] password for user: ********\n正在停止服务 ${service}... OK`;
      } else {
        return `[sudo] password for user: ********\nsudo: ${command}: 命令不存在，但您可以尝试安装相关软件包。\n参见 man(8) sudo-execution 了解更多信息.`;
      }
  }
};

export const zyh = async (args: string[]): Promise<string> => {
  const version = "v1.0.0-alpha";
  const framework = "LiveTerm";
  const githubRepo = "https://github.com/Cveinnt/LiveTerm ";
  const cdnProvider = "Cloudflare";
  const packageManager = "npm / yarn";
  const utcTime = new Date().toISOString();

  return `
杖雍皓™（ZhangYonghao Terminal UI Framework）
版本: ${version}
由联合库 UNHub 支持开发

技术支持：
- GitHub 开源框架: ${githubRepo}
- CDN 加速提供: ${cdnProvider}
- 前端技术基于: ${framework}

构建工具: ${packageManager}

当前 UTC 时间: ${utcTime}
  
© 2024 杖雍皓开源终端实验室 | MIT License
`.trim();
};

export const game = async (args: string[]): Promise<string> => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  return `
🎮 欢迎来到猜数字游戏！我已经想好了一个 1 到 100 之间的数字。
你可以输入 "guess <数字>" 来猜测它。

例如：
> guess 42
Too high!
> guess 23
Too low!
> guess 30
You got it!

你最多有 7 次机会。开始吧！
`;
};

export const hack = async (args: string[]): Promise<string> => {
  return `
🔓 正在连接目标服务器...
✅ 连接成功 → zyhgov.cn
📡 正在扫描开放端口...
PORT   SERVICE
22/tcp ssh
80/tcp http
🔥 发现漏洞 CVE-2024-XXXXX
🔐 正在注入 payload...
🔑 权限获取成功 → root@zyhgov.cn
💾 正在下载敏感数据...

[注意] 本功能仅供娱乐，实际网络攻击属于违法行为，请勿模仿。
`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

 ███████████ █████ █████ █████   █████    ███████    ███████████     █████████ 
░█░░░░░░███ ░░███ ░░███ ░░███   ░░███   ███░░░░░███ ░░███░░░░░███   ███░░░░░███
░     ███░   ░░███ ███   ░███    ░███  ███     ░░███ ░███    ░███  ███     ░░░ 
     ███      ░░█████    ░███████████ ░███      ░███ ░██████████  ░███         
    ███        ░░███     ░███░░░░░███ ░███      ░███ ░███░░░░░███ ░███    █████
  ████     █    ░███     ░███    ░███ ░░███     ███  ░███    ░███ ░░███  ░░███ 
 ███████████    █████    █████   █████ ░░░███████░   █████   █████ ░░█████████ 
░░░░░░░░░░░    ░░░░░    ░░░░░   ░░░░░    ░░░░░░░    ░░░░░   ░░░░░   ░░░░░░░░░  

This website is zyhorg first all English terminal website
Type 'help' to see the list of available commands.
Type 'info' to display summary.
Type 'zyh' to view website system version.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
