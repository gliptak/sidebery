export const NUM_1_RE = /^(1|(\d*?)[^1]1)$/
export const NUM_234_RE = /^([234]|(\d*?)[^1][234])$/

export const commonTranslations: Translations = {
  // ---
  // -- Bookmarks editor
  // -
  'bookmarks_editor.name_bookmark_placeholder': {
    en: 'Bookmark name...',
    ru: 'Название закладки...',
    de: 'Name des Lesezeichens...',
    zh_CN: '书签名称...',
    zh_TW: '書籤名稱...',
  },
  'bookmarks_editor.name_folder_placeholder': {
    en: 'Folder name...',
    ru: 'Название папки...',
    de: 'Name des Ordners...',
    zh_CN: '文件夹名称...',
    zh_TW: '資料夾名稱...',
  },
  'bookmarks_editor.url_placeholder': {
    en: 'e.g. https://example.com',
    ru: 'Ссылка...',
    de: 'z.B. https://beispiel.de',
    zh: '例如 https://example.com',
  },

  // ---
  // -- Buttons
  // -
  'btn.create': {
    en: 'Create',
    ru: 'Создать',
    de: 'Erstellen',
    zh_CN: '创建',
    zh_TW: '建立',
  },
  'btn.save': {
    en: 'Save',
    ru: 'Сохранить',
    de: 'Speichern',
    zh_CN: '保存',
    zh_TW: '儲存',
  },
  'btn.restore': {
    en: 'Restore',
    ru: 'Восстановить',
    de: 'Wiederherstellen',
    zh_CN: '恢复',
    zh_TW: '復原',
  },
  'btn.update': {
    en: 'Update',
    ru: 'Обновить',
    de: 'Aktualisieren',
    zh: '更新',
  },
  'btn.yes': {
    en: 'Yes',
    ru: 'Да',
    de: 'Ja',
    zh_CN: '确认',
    zh_TW: '確定',
  },
  'btn.ok': {
    en: 'Ok',
    ru: 'Ок',
    de: 'Ok',
    zh: '是',
  },
  'btn.no': {
    en: 'No',
    ru: 'Нет',
    de: 'Nein',
    zh: '取消',
  },
  'btn.cancel': {
    en: 'Cancel',
    ru: 'Отмена',
    de: 'Abbrechen',
    zh: '取消',
  },
  'btn.stop': {
    en: 'Stop',
    ru: 'Остановить',
    de: 'Stopp',
    zh: '停止',
  },

  // ---
  // -- Container
  // -
  'container.new_container_name': {
    en: 'Container',
    ru: 'Контейнер',
    de: 'Umgebung',
    zh: '容器',
  },

  // ---
  // -- Tabs panel
  // -
  'panel.tabs.title': {
    en: 'Tabs',
    ru: 'Вкладки',
    de: 'Tabs',
    zh_CN: '标签页',
    zh_TW: '分頁',
  },

  // ---
  // -- Bookmarks panel
  // -
  'panel.bookmarks.title': {
    en: 'Bookmarks',
    ru: 'Закладки',
    de: 'Lesezeichen',
    zh_CN: '书签',
    zh_TW: '書籤',
  },
  'panel.bookmarks.req_perm': {
    en: 'Bookmarks panel requires "Bookmarks" permission.',
    ru: 'Панель закладок требует разрешения "Закладки".',
    de: 'Lesezeichen Panel erfordert "Lesezeichen" Berechtigung',
    zh_CN: '书签面板需要"书签"权限。',
    zh_TW: '書籤面板需要「書籤」權限。',
  },

  // ---
  // -- History panel
  // -
  'panel.history.title': {
    en: 'History',
    ru: 'История',
    de: 'Chronik',
    zh_CN: '历史',
    zh_TW: '歷史',
  },
  'panel.history.load_more': {
    en: 'Scroll to load more',
    ru: 'Прокрутитe вниз, чтобы загрузить больше',
    de: 'Scrollen, um mehr zu laden',
    zh_CN: '滚动加载更多',
    zh_TW: '捲動載入更多',
  },
  'panel.history.req_perm': {
    en: 'History panel requires "History" permission.',
    ru: 'Панель истории требует разрешения "История".',
    de: 'Chronik Panel erfordert "Chronik" Berechtigung',
    zh_CN: '历史面板需要"历史"权限。',
    zh_TW: '歷史面板需要「歷史」權限。',
  },

  // ---
  // -- Popups
  // -
  // - Bookmarks popup
  'popup.bookmarks.name_label': {
    en: 'Name',
    ru: 'Название',
    de: 'Name',
    zh_CN: '名称',
    zh_TW: '名稱',
  },
  'popup.bookmarks.location_label': {
    en: 'Location',
    ru: 'Расположение',
    de: 'Ort',
    zh_CN: '地址',
    zh_TW: '位置',
  },
  'popup.bookmarks.location_new_folder_placeholder': {
    en: 'New folder name',
    ru: 'Название новой папки',
    de: 'Neuer Ordner',
    zh_CN: '新文件夹名称',
    zh_TW: '新資料夾名稱',
  },
  'popup.bookmarks.recent_locations_label': {
    en: 'Recent locations',
    ru: 'Недавние расположения',
    de: 'Zuletzt besucht',
    zh_CN: '最近地址',
    zh_TW: '最近位置',
  },
  'popup.bookmarks.save_in_bookmarks': {
    en: 'Save in bookmarks',
    ru: 'Сохранить в закладки',
    de: 'Als Lesezeichen speichern',
    zh_CN: '保存至书签',
    zh_TW: '新增書籤',
  },
  'popup.bookmarks.set_folder_for_tabs_panel': {
    en: 'Set folder for this tabs panel',
    ru: 'Установить папку для этой панели вкладок',
    de: 'Ordner für dieses Tab-Panel festlegen',
    zh_CN: '设置此标签面板的文件夹',
    zh_TW: '設定此分頁面板的資料夾',
  },
  'popup.bookmarks.edit_bookmark': {
    en: 'Edit bookmark',
    ru: 'Редактировать закладку',
    de: 'Lesezeichen bearbeiten',
    zh_CN: '编辑书签',
    zh_TW: '編輯書籤',
  },
  'popup.bookmarks.edit_folder': {
    en: 'Edit folder',
    ru: 'Редактировать папку',
    de: 'Ordner bearbeiten',
    zh_CN: '编辑文件夹',
    zh_TW: '編輯資料夾',
  },
  'popup.bookmarks.select_root_folder': {
    en: 'Select root folder',
    ru: 'Выберите корневую папку',
    de: 'Quellordner auswählen',
    zh_CN: '选择根文件夹',
    zh_TW: '選取根資料夾',
  },
  'popup.bookmarks.create_bookmark': {
    en: 'Create bookmark',
    ru: 'Создать закладку',
    de: 'Lesezeichen erstellen',
    zh_CN: '创建书签',
    zh_TW: '建立書籤',
  },
  'popup.bookmarks.create_folder': {
    en: 'Create folder',
    ru: 'Создать папку',
    de: 'Ordner erstellen',
    zh_CN: '创建文件夹',
    zh_TW: '建立資料夾',
  },
  'popup.bookmarks.move_to': {
    en: 'Move to',
    ru: 'Переместить в',
    de: 'Verschieben nach',
    zh_CN: '移动到',
    zh_TW: '移動到',
  },
  'popup.bookmarks.move': {
    en: 'Move',
    ru: 'Переместить',
    de: 'Verschieben',
    zh_CN: '移动',
    zh_TW: '移動',
  },
  'popup.bookmarks.create_bookmarks': {
    en: 'Create bookmark[s]',
    ru: 'Создать закладки',
    de: 'Lesezeichen erstellen',
    zh_CN: '创建书签',
    zh_TW: '建立書籤',
  },
  'popup.bookmarks.restore': {
    en: 'Restore from bookmarks folder',
    ru: 'Восстановить из папки закладок',
    de: 'Aus Lesezeichen-Ordner wiederherstellen',
    zh_CN: '从书签文件夹恢复',
    zh_TW: '從書籤資料夾復原',
  },
  'popup.bookmarks.convert_title': {
    en: 'Convert to bookmarks',
    ru: 'Конвертировать в закладки',
    de: 'In Lesezeichen konvertieren',
    zh_CN: '转换为书签',
    zh_TW: '轉換為書籤',
  },
  'popup.bookmarks.convert': {
    en: 'Convert',
    ru: 'Конвертировать',
    de: 'Konvertieren',
    zh_CN: '转换',
    zh_TW: '轉換',
  },

  'popup.new_tab_shortcuts.title': {
    en: 'New Tab Shortcuts',
    ru: 'Ярлыки новой вкладки',
    de: 'Neue Tab-Verknüpfungen',
    zh_CN: '新标签快捷方式',
    zh_TW: '新分頁捷徑',
  },
  'popup.new_tab_shortcuts.create_title': {
    en: 'Create shortcut',
    ru: 'Создать ярлык',
    de: 'Verknüpfung erstellen',
    zh_CN: '创建快捷方式',
    zh_TW: '建立捷徑',
  },
  'popup.new_tab_shortcuts.new_shortcut_container_label': {
    en: 'Container',
    ru: 'Контейнер',
    de: 'Behälter',
    zh: '容器',
  },
  'popup.new_tab_shortcuts.new_shortcut_default_container': {
    en: 'Default container',
    ru: 'Стандартный контейнер',
    de: 'Standard-Behälter',
    zh_CN: '默认容器',
    zh_TW: '預設容器',
  },
  'popup.new_tab_shortcuts.new_shortcut_url_label': {
    en: 'URL',
    ru: 'URL-адрес',
  },
  'popup.new_tab_shortcuts.new_shortcut_url_placeholder': {
    en: 'Default new tab',
    ru: 'Новая вкладка по умолчанию',
    de: 'Standard-Neuer Tab',
    zh_CN: '默认新标签',
    zh_TW: '預設新分頁',
  },
  'popup.new_tab_shortcuts.add_br_btn': {
    en: 'Add new line',
    ru: 'Добавить новую строку',
    de: 'Neue Zeile hinzufügen',
    zh_CN: '添加新行',
    zh_TW: '新增分隔線',
  },
  'popup.new_tab_shortcuts.add_shortcut_btn': {
    en: 'Add shortcut',
    ru: 'Добавить ярлык',
    de: 'Verknüpfung hinzufügen',
    zh_CN: '添加快捷方式',
    zh_TW: '新增捷徑',
  },

  'popup.tab_move_rules.title': {
    en: 'Tab auto-move rules',
    ru: 'Правила автоматического перемещения вкладок',
    de: 'Tab Auto-Move Regeln',
    zh_CN: '标签页自动移动规则',
    zh_TW: '分頁自動移動規則',
  },
  'popup.tab_move_rules.editor_title.new': {
    en: 'Create auto-move rule',
    ru: 'Создать правило',
    de: 'Regel erstellen',
    zh_CN: '创建自动移动规则',
    zh_TW: '建立自動移動規則',
  },
  'popup.tab_move_rules.editor_title.edit': {
    en: 'Edit auto-move rule',
    ru: 'Редактировать правило',
    de: 'Regel bearbeiten',
    zh_CN: '编辑自动移动规则',
    zh_TW: '編輯自動移動規則',
  },
  'popup.tab_move_rules.rule_name_label': {
    en: 'Name (optional)',
    ru: 'Название (опционально)',
    de: 'Name (optional)',
    zh_CN: '名称（选填）',
    zh_TW: '名稱（選填）',
  },
  'popup.tab_move_rules.rule_container_label': {
    en: 'If tab is in a container',
    ru: 'Если вкладка в контейнере',
    de: 'Wenn Tab in einem Behälter ist',
    zh_CN: '如果标签页在容器中',
    zh_TW: '如果分頁在容器中',
  },
  'popup.tab_move_rules.rule_url_label': {
    en: 'If tab has URL ("substring" or "/RegExp/")',
    ru: 'Если вкладка имеет URL-адрес ("подстрока" или "/RegExp/")',
    de: 'Wenn Tab URL hat ("substring" oder "/RegExp/")',
    zh: '如果 URL 含有 ("字符串" 或 "/RegExp/")',
  },
  'popup.tab_move_rules.rule_top_lvl_label': {
    en: 'If tab at the top level of tree',
    ru: 'Если вкладка на верхнем уровне дерева',
    de: 'Wenn Tab auf der obersten Ebene des Baums ist',
    zh_CN: '如果标签页位于树的顶层',
    zh_TW: '如果分頁位於樹的頂層',
  },
  'popup.tab_move_rules.add_rule_btn': {
    en: 'Add rule',
    ru: 'Добавить правило',
    de: 'Regel hinzufügen',
    zh_CN: '添加规则',
    zh_TW: '新增規則',
  },
  'popup.tab_move_rules.edit_rule_btn.save': {
    en: 'Save',
    ru: 'Сохранить',
    de: 'Regel speichern',
    zh_CN: '保存',
    zh_TW: '儲存',
  },
  'popup.tab_move_rules.edit_rule_btn.cancel': {
    en: 'Cancel',
    ru: 'Отмена',
    de: 'Abbrechen',
    zh: '取消',
  },

  'popup.tab_reopen_rules.title': {
    en: 'Tab reopening rules',
    ru: 'Правила',
    de: 'Regeln für die Wiedereröffnung der Registerkarte',
    zh_CN: '标签页重新打开规则',
    zh_TW: '分頁重新開啟規則',
  },
  'popup.tab_reopen_rules.enable_label': {
    en: 'Enable listed rules',
    ru: 'Включить перечисленные правила',
    de: 'Aktivieren Sie die aufgeführten Regeln',
    zh_CN: '启用列出的规则',
    zh_TW: '啟用列出的規則',
  },
  'popup.tab_reopen_rules.editor_title.new': {
    en: 'Create new rule',
    ru: 'Создать правило',
    de: 'Neue Regel erstellen',
    zh_CN: '创建新规则',
    zh_TW: '建立新規則',
  },
  'popup.tab_reopen_rules.editor_title.edit': {
    en: 'Edit rule',
    ru: 'Редактировать правило',
    de: 'Regel bearbeiten',
    zh_CN: '编辑规则',
    zh_TW: '編輯規則',
  },
  'popup.tab_reopen_rules.rule_name_label': {
    en: 'Name (optional)',
    ru: 'Название (опционально)',
    de: 'Name (optional)',
    zh_CN: '名称（选填）',
    zh_TW: '名稱（選填）',
  },
  'popup.tab_reopen_rules.rule_type_label': {
    en: 'Type of the rule',
    ru: 'Тип правила',
    de: 'Regeltyp',
    zh_CN: '规则类型',
    zh_TW: '規則類型',
  },
  'popup.tab_reopen_rules.rule_type_include': {
    en: 'Include rule',
    ru: 'Правило включения',
    de: 'Einschlussregel',
    zh_CN: '包括规则',
    zh_TW: '包括規則',
  },
  'popup.tab_reopen_rules.rule_type_exclude': {
    en: 'Exclude rule',
    ru: 'Правило исключения',
    de: 'Ausschlussregel',
    zh_CN: '排除规则',
    zh_TW: '排除規則',
  },
  'popup.tab_reopen_rules.rule_url_label': {
    en: 'If tab has URL ("substring" or "/RegExp/")',
    ru: 'Если вкладка имеет URL-адрес ("подстрока" или "/RegExp/")',
    de: 'Wenn Tab URL hat ("substring" oder "/RegExp/")',
    zh_CN: '如果标签页有 URL ("字符串" 或 "/RegExp/")',
    zh_TW: '如果分頁含有 URL ("字符串" 或 "/RegExp/")',
  },
  'popup.tab_reopen_rules.rule_suffix_include': {
    en: n => `...reopen it in "${n}" container`,
    ru: n => `...открыть ee в контейнере "${n}"`,
    de: n => `...in "${n}" Behälter wieder öffnen`,
    zh_CN: n => `...在 "${n}" 容器中重新打开它`,
    zh_TW: n => `...在「${n}」容器中重新開啟它`,
  },
  'popup.tab_reopen_rules.rule_suffix_exclude': {
    en: n => `...and it is in "${n}" container, reopen it in default container.`,
    ru: n => `...и она находится в контейнере "${n}", открыть ее в контейнере по умолчанию.`,
    de: n => `...und es ist in "${n}" Behälter, öffnen Sie es in Standardbehälter.`,
    zh_CN: n => `...而它在 "${n}" 容器中，在默认容器中重新打开它。`,
    zh_TW: n => `...而它在「${n}」容器中，則在預設容器中重新開啟它。`,
  },
  'popup.tab_reopen_rules.add_rule_btn': {
    en: 'Add rule',
    ru: 'Добавить правило',
    de: 'Regel hinzufügen',
    zh_CN: '添加规则',
    zh_TW: '新增規則',
  },
  'popup.tab_reopen_rules.edit_rule_btn.save': {
    en: 'Save',
    ru: 'Сохранить',
    de: 'Regel speichern',
    zh_CN: '保存',
    zh_TW: '儲存',
  },
  'popup.tab_reopen_rules.edit_rule_btn.cancel': {
    en: 'Cancel',
    ru: 'Отмена',
    de: 'Abbrechen',
    zh: '取消',
  },

  'popup.url_rules.title': {
    en: 'Site Config',
    ru: 'Настройка сайта',
    de: 'Seitenkonfiguration',
    zh_CN: '站点配置',
    zh_TW: '網站設定',
  },
  'popup.url_rules.match_label': {
    en: 'Select tabs by URL',
    ru: 'Выбирать вкладки по URL',
    de: 'Tabs nach URL auswählen',
    zh_CN: '按 URL 选择标签页',
    zh_TW: '依 URL 選取分頁',
  },
  'popup.url_rules.custom_match_placeholder': {
    en: '"substring" or "/RegExp/"',
    ru: '"подстрока" или "/RegExp/"',
    de: '"substring" oder "/RegExp/"',
    zh: '"字符串" 或 "/RegExp/"',
  },
  'popup.url_rules.reopen_label': {
    en: 'Reopen these tabs in container:',
    ru: 'Открывать эти вкладки в контейнере:',
    de: 'Diese Tabs in Behälter wieder öffnen:',
    zh_CN: '重新打开这些选项卡在：',
    zh_TW: '重開這些分頁於容器：',
  },
  'popup.url_rules.move_label': {
    en: 'Move these tabs to panel:',
    ru: 'Перемещать эти вкладки в панель:',
    de: 'Diese Tabs in Panel verschieben:',
    zh_CN: '将这些选项卡移动到面板：',
    zh_TW: '將這些分頁移動到面板：',
  },
  'popup.url_rules.move_top_lvl_label': {
    en: 'If tab at the top level of tree',
    ru: 'Если вкладка на верхнем уровне дерева',
    de: 'Wenn Tab auf der obersten Ebene des Baums ist',
    zh_CN: '如果选项卡位于树的顶层',
    zh_TW: '如果分頁位於樹的頂層',
  },

  // ---
  // -- Context menu
  // -
  // - Toolbar button (browserAction)
  'menu.browserAction.open_settings': {
    en: 'Open settings',
    ru: 'Открыть настройки',
    de: 'Einstellungen öffnen',
    zh_CN: '打开设置',
    zh_TW: '開啟設定',
  },
  'menu.browserAction.create_snapshot': {
    en: 'Create snapshot',
    ru: 'Создать снепшот',
    de: 'Schnappschuss erstellen',
    zh_CN: '创建快照',
    zh_TW: '建立快照',
  },
  // - New tab bar
  'menu.new_tab_bar.no_container': {
    en: 'No Container',
    ru: 'Не в контейнере',
    de: 'Keine Umgebung',
    zh_CN: '无容器',
    zh_TW: '無容器',
  },
  'menu.new_tab_bar.new_container': {
    en: 'In New Container',
    ru: 'В новом контейнере',
    de: 'In neuer Umgebung',
    zh: '在新容器中',
  },
  'menu.new_tab_bar.manage_shortcuts': {
    en: 'Manage Shortcuts',
    ru: 'Управление ярлыками',
    zh_CN: '管理快捷方式',
    zh_TW: '管理捷徑',
  },
  'menu.new_tab_bar.manage_containers': {
    en: 'Manage Containers',
    ru: 'Управление контейнерами',
    de: 'Umgebungen verwalten',
    zh: '管理容器',
  },
  // - Bookmark
  'menu.bookmark.open_in_sub_menu_name': {
    en: 'Open in',
    ru: 'Открыть в',
    de: 'Öffnen in',
    zh_CN: '打开',
    zh_TW: '開啟',
  },
  'menu.bookmark.open_in_new_window': {
    en: 'Open in new normal window',
    ru: 'Открыть в новом стандартном окне',
    de: 'Öffnen in neuem normalem Fenster',
    zh_CN: '新建窗口打开链接',
    zh_TW: '用新視窗開啟',
  },
  'menu.bookmark.open_in_new_priv_window': {
    en: 'Open in new private window',
    ru: 'Открыть в новом приватном окне',
    de: 'Öffnen in neuem privatem Fenster',
    zh_CN: '新建隐私窗口打开链接',
    zh_TW: '用新隱私視窗開啟',
  },
  'menu.bookmark.open_in_panel_': {
    en: 'Open in panel...',
    ru: 'Открыть в панели...',
    de: 'Öffnen in Panel...',
    zh_CN: '在面板中打开...',
    zh_TW: '在面板中開啟...',
  },
  'menu.bookmark.open_in_new_panel': {
    en: 'Open in new tabs panel',
    ru: 'Открыть в новой панели вкладок',
    de: 'Öffnen in neuem Tab-Panel',
    zh_CN: '新标签面板中打开链接',
    zh_TW: '用新分頁面板開啟',
  },
  'menu.bookmark.open_in_ctr_': {
    en: 'Open in container...',
    ru: 'Открыть в контейнере...',
    de: 'Öffnen in Umgebung...',
    zh_CN: '在容器中打开...',
    zh_TW: '在容器中開啟...',
  },
  'menu.bookmark.open_in_default_ctr': {
    en: 'Open in default container',
    ru: 'Открыть в стандартном контейнере',
    de: 'Öffnen in Standardumgebung',
    zh_CN: '在默认容器中打开',
    zh_TW: '在預設容器中開啟',
  },
  'menu.bookmark.open_in_': {
    en: 'Open in ',
    ru: 'Открыть в ',
    de: 'Öffnen in ',
    zh_CN: '打开在 ',
    zh_TW: '開啟於：',
  },
  'menu.bookmark.sort_sub_menu_name': {
    en: 'Sort',
    ru: 'Сортировать',
    de: 'Sortieren',
    zh: '排序',
  },
  'menu.bookmark.sort_by_name': {
    en: 'Sort by name',
    ru: 'Сортировать по названию',
    de: 'Sortieren nach Name',
    zh_CN: '按名称排序',
    zh_TW: '依名稱排序',
  },
  'menu.bookmark.sort_by_name_asc': {
    en: 'Sort by name (A-z)',
    ru: 'Сортировать по названию (А-я)',
    de: 'Sortieren nach Name (A-z)',
    zh_CN: '按名称排序 (A-z)',
    zh_TW: '依名稱排序 (A-z)',
  },
  'menu.bookmark.sort_by_name_des': {
    en: 'Sort by name (z-A)',
    ru: 'Сортировать по названию (я-А)',
    de: 'Sortieren nach Name (z-A)',
    zh_CN: '按名称排序 (z-A)',
    zh_TW: '依名稱排序 (z-A)',
  },
  'menu.bookmark.sort_by_link': {
    en: 'Sort by URL',
    ru: 'Сортировать по адресу',
    de: 'Sortieren nach URL',
    zh_CN: '按网址排序',
    zh_TW: '依網址排序',
  },
  'menu.bookmark.sort_by_link_asc': {
    en: 'Sort by URL (A-z)',
    ru: 'Сортировать по адресу (А-я)',
    de: 'Sortieren nach URL (A-z)',
    zh_CN: '按网址排序 (A-z)',
    zh_TW: '依網址排序 (A-z)',
  },
  'menu.bookmark.sort_by_link_des': {
    en: 'Sort by URL (z-A)',
    ru: 'Сортировать по адресу (я-А)',
    de: 'Sortieren nach URL (z-A)',
    zh_CN: '按网址排序 (z-A)',
    zh_TW: '依網址排序 (z-A)',
  },
  'menu.bookmark.sort_by_time': {
    en: 'Sort by creation time',
    ru: 'Сортировать по времени создания',
    de: 'Sortieren nach Erstelldatum',
    zh_CN: '按添加时间排序',
    zh_TW: '依加入日期排序',
  },
  'menu.bookmark.sort_by_time_asc': {
    en: 'Sort by time (Old-New)',
    ru: 'Сортировать по времени (Старые-Новые)',
    de: 'Sortieren nach Zeit (Alt-Neu)',
    zh_CN: '按添加时间排序（旧-新）',
    zh_TW: '依加入日期排序（舊-新）',
  },
  'menu.bookmark.sort_by_time_des': {
    en: 'Sort by time (New-Old)',
    ru: 'Сортировать по времени (Новые-Старые)',
    de: 'Sortieren nach Zeit (Neu-Alt)',
    zh_CN: '按添加时间排序（新-旧）',
    zh_TW: '依加入日期排序（新-舊）',
  },
  'menu.bookmark.create_bookmark': {
    en: 'Create bookmark',
    ru: 'Создать закладку',
    de: 'Lesezeichen erstellen',
    zh_CN: '创建书签',
    zh_TW: '新增書籤',
  },
  'menu.bookmark.create_folder': {
    en: 'Create folder',
    ru: 'Создать папку',
    de: 'Ordner erstellen',
    zh_CN: '创建文件夹',
    zh_TW: '新增資料夾',
  },
  'menu.bookmark.create_separator': {
    en: 'Create separator',
    ru: 'Создать разделитель',
    de: 'Trennlinie hinzufügen',
    zh_CN: '创建分隔符',
    zh_TW: '新增分隔線',
  },
  'menu.bookmark.open_as_bookmarks_panel': {
    en: 'Open as bookmarks panel',
    ru: 'Открыть как панель закладок',
    de: 'Als Lesezeichen-Panel öffnen',
    zh_CN: '作为书签面板打开',
    zh_TW: '作為書籤面板開啟',
  },
  'menu.bookmark.open_as_tabs_panel': {
    en: 'Open as tabs panel',
    ru: 'Открыть как панель вкладок',
    de: 'Als Tab-Panel öffnen',
    zh_CN: '作为标签页面板打开',
    zh_TW: '作為分頁面板開啟',
  },
  'menu.bookmark.move_to': {
    en: 'Move to...',
    ru: 'Переместить в...',
    de: 'Verschieben nach...',
    zh_CN: '移动到...',
    zh_TW: '移動到...',
  },
  'menu.bookmark.edit_bookmark': {
    en: 'Edit',
    ru: 'Редактировать',
    de: 'Bearbeiten',
    zh_CN: '编辑',
    zh_TW: '編輯',
  },
  'menu.bookmark.delete_bookmark': {
    en: 'Delete',
    ru: 'Удалить',
    de: 'Löschen',
    zh_CN: '删除',
    zh_TW: '刪除',
  },
  // - Bookmarks panel
  'menu.bookmark.collapse_all': {
    en: 'Collapse all folders',
    ru: 'Свернуть все папки',
    de: 'Alle Ordner einklappen',
    zh_CN: '折叠全部文件夹',
    zh_TW: '折疊全部資料夾',
  },
  'menu.bookmark.switch_view': {
    en: 'View mode',
    ru: 'Режим отображения',
    de: 'Anzeigemodus',
    zh_CN: '视图模式',
    zh_TW: '檢視模式',
  },
  'menu.bookmark.switch_view_history': {
    en: 'History view',
    ru: 'Хронологическое отображение',
    de: 'Chronikansicht',
    zh_CN: '历史视图',
    zh_TW: '歷史檢視',
  },
  'menu.bookmark.switch_view_tree': {
    en: 'Tree view',
    ru: 'Древовидное отображение',
    de: 'Baumansicht',
    zh_CN: '树状视图',
    zh_TW: '樹狀檢視',
  },
  'menu.bookmark.convert_to_tabs_panel': {
    en: 'Convert to tabs panel',
    ru: 'Конвертировать в панель вкладок',
    de: 'In Tab-Panel konvertieren',
    zh_CN: '转换为标签页面板',
    zh_TW: '轉換為分頁面板',
  },
  'menu.bookmark.remove_panel': {
    en: 'Remove panel',
    ru: 'Удалить панель',
    de: 'Panel entfernen',
    zh: '移除面板',
  },
  // - Tab
  'menu.tab.undo': {
    en: 'Undo close tab',
    ru: 'Восстановить закрытую вкладку',
    de: 'Geschlossenen Tab wiederherstellen',
    zh_CN: '撤消关闭标签页',
    zh_TW: '回復關閉的分頁',
  },
  'menu.tab.mute': {
    en: 'Mute',
    ru: 'Выключить звук',
    de: 'Stumm schalten',
    zh_CN: '静音',
    zh_TW: '分頁靜音',
  },
  'menu.tab.unmute': {
    en: 'Unmute',
    ru: 'Включить звук',
    de: 'Stummschaltung aufheben',
    zh_CN: '取消静音',
    zh_TW: '取消分頁靜音',
  },
  'menu.tab.reload': {
    en: 'Reload',
    ru: 'Перезагрузить',
    de: 'Neu laden',
    zh_CN: '重新加载',
    zh_TW: '重新載入分頁',
  },
  'menu.tab.bookmark': {
    en: 'Add to bookmarks',
    ru: 'В закладки',
    de: 'Zu Lesezeichen hinzufügen',
    zh_CN: '添加到书签',
    zh_TW: '將分頁加入書籤',
  },
  'menu.tab.move_to_sub_menu_name': {
    en: 'Move to',
    ru: 'Переместить в',
    de: 'Verschieben in',
    zh_CN: '移动到',
    zh_TW: '移動分頁',
  },
  'menu.tab.move_to_new_window': {
    en: 'Move to new window',
    ru: 'Переместить в новое окно',
    de: 'Verschieben in neues Fenster',
    zh_CN: '移动到新窗口',
    zh_TW: '移動到新視窗',
  },
  'menu.tab.move_to_new_priv_window': {
    en: 'Move to private window',
    ru: 'Переместить в приватное окно',
    de: 'Verschieben in privates Fenster',
    zh_CN: '移动到新隐私窗口',
    zh_TW: '移動到新隱私視窗',
  },
  'menu.tab.move_to_window_': {
    en: 'Move to window...',
    ru: 'Переместить в окно...',
    de: 'Verschieben in Fenster...',
    zh_CN: '移动到窗口...',
    zh_TW: '移動到視窗...',
  },
  'menu.tab.move_to_another_window': {
    en: 'Move to another window',
    ru: 'Переместить в другое окно',
    de: 'Verschieben in anderes Fenster',
    zh_CN: '移动到另一个窗口',
    zh_TW: '移動到另一個視窗',
  },
  'menu.tab.move_to_panel_label': {
    en: 'Move to panel...',
    ru: 'Переместить в панель...',
    de: 'Verschieben in Panel...',
    zh_CN: '移动到面板...',
    zh_TW: '移動到面板...',
  },
  'menu.tab.move_to_panel_': {
    en: 'Move to ',
    ru: 'Переместить в ',
    de: 'Verschieben in ',
    zh_CN: '移动到 ',
    zh_TW: '移動到面板：',
  },
  'menu.tab.move_to_new_panel': {
    en: 'Move to new panel',
    ru: 'Переместить в новую панель',
    de: 'Verschieben in neues Panel',
    zh_CN: '移动到新面板',
    zh_TW: '移動到新面板',
  },
  'menu.tab.reopen_in_sub_menu_name': {
    en: 'Reopen in',
    ru: 'Переоткрыть в',
    de: 'Neu öffnen in',
    zh_CN: '重新打开',
    zh_TW: '重新開啟',
  },
  'menu.tab.reopen_in_new_window': {
    en: 'Reopen in new window of another type',
    ru: 'Переоткрыть в новом окне другого типа',
    de: 'Neu öffnen in neuem Fenster eines anderen Typs',
    zh_CN: '用其他类型的新窗口重新打开',
    zh_TW: '用其他類型的新視窗重新開啟',
  },
  'menu.tab.reopen_in_new_norm_window': {
    en: 'Reopen in new normal window',
    ru: 'Переоткрыть в новом стандартном окне',
    de: 'Neu öffnen in neuem normalem Fenster',
    zh_CN: '用新普通窗口重新打开',
    zh_TW: '用新普通視窗重新開啟',
  },
  'menu.tab.reopen_in_new_priv_window': {
    en: 'Reopen in new private window',
    ru: 'Переоткрыть в новом приватном окне',
    de: 'Neu öffnen in neuem privatem Fenster',
    zh_CN: '用新隐私窗口重新打开',
    zh_TW: '用新隱私視窗重新開啟',
  },
  'menu.tab.reopen_in_window': {
    en: 'Reopen in window of another type',
    ru: 'Переоткрыть в окне другого типа',
    de: 'Neu öffnen in Fenster eines anderen Typs',
    zh_CN: '用其他类型的窗口重新打开',
    zh_TW: '用其他類型的視窗重新開啟',
  },
  'menu.tab.reopen_in_norm_window': {
    en: 'Reopen in normal window',
    ru: 'Переоткрыть в стандартном окне',
    de: 'Neu öffnen in normalem Fenster',
    zh_CN: '用普通窗口重新打开',
    zh_TW: '用普通視窗重新開啟',
  },
  'menu.tab.reopen_in_priv_window': {
    en: 'Reopen in private window',
    ru: 'Переоткрыть в приватном окне',
    de: 'Neu öffnen in privatem Fenster',
    zh_CN: '用隐私窗口重新打开',
    zh_TW: '用隱私視窗重新開啟',
  },
  'menu.tab.reopen_in_window_': {
    en: 'Reopen in window...',
    ru: 'Переоткрыть в окне...',
    de: 'Neu öffnen in Fenster...',
    zh_CN: '用窗口重新打开...',
    zh_TW: '用視窗重新開啟...',
  },
  'menu.tab.reopen_in_ctr_': {
    en: 'Reopen in container...',
    ru: 'Переоткрыть в контейнере...',
    de: 'Neu öffnen in Umgebung...',
    zh_CN: '用容器重新打开...',
    zh_TW: '用容器重新開啟...',
  },
  'menu.tab.reopen_in_default_container': {
    en: 'Reopen in default container',
    ru: 'Переоткрыть в стандартном контейнере',
    de: 'In Standardumgebung neu öffnen',
    zh_CN: '用默认容器重新打开',
    zh_TW: '用預設容器重新開啟',
  },
  'menu.tab.reopen_in_': {
    en: 'Reopen in ',
    ru: 'Переоткрыть в ',
    de: 'Neu öffnen in ',
    zh_CN: '重新打开在 ',
    zh_TW: '重開於容器：',
  },
  'menu.tab.reopen_in_new_container': {
    en: 'Reopen in new container',
    ru: 'Переоткрыть в новом контейнере',
    de: 'Neu öffnen in neuer Umgebung',
    zh_CN: '用新容器重新打开',
    zh_TW: '用新容器重新開啟',
  },
  'menu.tab.open_in_ctr_': {
    en: 'Open in container...',
    ru: 'Открыть в контейнере...',
    zh_CN: '用容器打开...',
    zh_TW: '用容器開啟...',
  },
  'menu.tab.open_in_default_container': {
    en: 'Open in default container',
    ru: 'Открыть в новом контейнере',
    zh_CN: '用默认容器打开',
    zh_TW: '用預設容器開啟',
  },
  'menu.tab.open_in_': {
    en: 'Open in ',
    ru: 'Открыть в ',
    zh_CN: '打开在 ',
    zh_TW: '開啟於容器：',
  },
  'menu.tab.colorize_': {
    en: 'Set color',
    ru: 'Задать цвет',
    zh_CN: '设置颜色',
    zh_TW: '設定顏色',
  },
  'menu.tab.colorize_colors': {
    en: 'Color...',
    ru: 'Цвет...',
    zh_CN: '颜色...',
    zh_TW: '顏色...',
  },
  'menu.tab.pin': {
    en: 'Pin',
    ru: 'Закрепить',
    de: 'Anheften',
    zh_CN: '固定标签页',
    zh_TW: '釘選分頁',
  },
  'menu.tab.unpin': {
    en: 'Unpin',
    ru: 'Открепить',
    de: 'Lösen',
    zh_CN: '取消固定标签页',
    zh_TW: '取消釘選分頁',
  },
  'menu.tab.duplicate': {
    en: 'Duplicate',
    ru: 'Дублировать',
    de: 'Duplizieren',
    zh_CN: '复制标签页',
    zh_TW: '複製分頁',
  },
  'menu.tab.discard': {
    en: 'Unload',
    ru: 'Выгрузить',
    de: 'Entladen',
    zh_CN: '卸载标签页',
    zh_TW: '卸載分頁',
  },
  'menu.tab.edit_title': {
    en: 'Edit title',
    ru: 'Редактировать заголовок',
    zh_CN: '编辑标题',
    zh_TW: '編輯標題',
  },
  'menu.tab.group': {
    en: 'Group',
    ru: 'Сгруппировать',
    de: 'Gruppe',
    zh_CN: '新分组',
    zh_TW: '新群組',
  },
  'menu.tab.flatten': {
    en: 'Flatten',
    ru: 'Сбросить вложенность',
    de: 'Plätten',
    zh_CN: '树序列化',
    zh_TW: '樹序列化',
  },
  'menu.tab.url_conf': {
    en: 'Configure site...',
    ru: 'Настроить сайт...',
    zh_CN: '配置站点...',
    zh_TW: '設定網站...',
  },
  'menu.tab.clear_cookies': {
    en: 'Clear cookies',
    ru: 'Удалить cookies',
    de: 'Cookies löschen',
    zh: '清除 Cookie',
  },
  'menu.tab.close': {
    en: 'Close',
    ru: 'Закрыть',
    de: 'Schließen',
    zh_CN: '关闭标签页',
    zh_TW: '關閉分頁',
  },
  'menu.tab.close_descendants': {
    en: 'Close descendants',
    ru: 'Закрыть потомки',
    de: 'Abkömmlinge schließen',
    zh_CN: '关闭子选项',
    zh_TW: '關閉子孫分頁',
  },
  'menu.tab.close_branch': {
    en: 'Close branch',
    ru: 'Закрыть ветку',
    de: 'Zweig schließen',
    zh_CN: '关闭分支',
    zh_TW: '關閉分支',
  },
  'menu.tab.close_above': {
    en: 'Close tabs above',
    ru: 'Закрыть вкладки сверху',
    de: 'Tabs darüber schließen',
    zh_CN: '关闭上侧标签页',
    zh_TW: '關閉上側分頁',
  },
  'menu.tab.close_below': {
    en: 'Close tabs below',
    ru: 'Закрыть вкладки снизу',
    de: 'Tabs darunter schließen',
    zh_CN: '关闭下侧标签页',
    zh_TW: '關閉下側分頁',
  },
  'menu.tab.close_other': {
    en: 'Close other tabs',
    ru: 'Закрыть другие вкладки',
    de: 'Andere Tabs schließen',
    zh_CN: '关闭其他标签页',
    zh_TW: '關閉其他分頁',
  },
  // - Tabs panel
  'menu.tabs_panel.mute_all_audible': {
    en: 'Mute all audible tabs',
    ru: 'Выключить звук',
    de: 'Alle hörbaren Tabs stummschalten',
    zh_CN: '静音全部有声标签页',
    zh_TW: '靜音全部有聲分頁',
  },
  'menu.tabs_panel.reload': {
    en: 'Reload tabs',
    ru: 'Перезагрузить вкладки',
    de: 'Tabs neu laden',
    zh_CN: '重新加载标签页',
    zh_TW: '重新載入分頁',
  },
  'menu.tabs_panel.discard': {
    en: 'Unload tabs',
    ru: 'Выгрузить вкладки',
    de: 'Tabs entladen',
    zh_CN: '卸载标签页',
    zh_TW: '卸載分頁',
  },
  'menu.tabs_panel.sel_all': {
    en: 'Select all tabs',
    ru: 'Выделить все вкладки',
    de: 'Alle Tabs auswählen',
    zh_CN: '选择全部标签页',
    zh_TW: '選取全部分頁',
  },
  'menu.tabs_panel.collapse_inact_branches': {
    en: 'Collapse inactive branches',
    ru: 'Свернуть неактивные ветки',
    de: 'Inaktive Zweige einklappen',
    zh_CN: '折叠非活动分支',
    zh_TW: '折疊非作用中分支',
  },
  'menu.tabs_panel.dedup': {
    en: 'Close duplicate tabs',
    ru: 'Закрыть дубликаты',
    de: 'Doppelte Tabs schließen',
    zh_CN: '关闭复制标签页',
    zh_TW: '關閉重複分頁',
  },
  'menu.tabs_panel.close': {
    en: 'Close tabs',
    ru: 'Закрыть вкладки',
    de: 'Tabs schließen',
    zh_CN: '关闭标签页',
    zh_TW: '關閉分頁',
  },
  'menu.tabs_panel.bookmark': {
    en: 'Save to bookmarks',
    ru: 'Сохранить в закладки',
    de: 'In Lesezeichen speichern',
    zh_CN: '保存到书签',
    zh_TW: '儲存到書籤',
  },
  'menu.tabs_panel.restore_from_bookmarks': {
    en: 'Restore from bookmarks',
    ru: 'Восстановить из закладок',
    de: 'Aus Lesezeichen wiederherstellen',
    zh_CN: '从书签中恢复',
    zh_TW: '從書籤中復原',
  },
  'menu.tabs_panel.convert_to_bookmarks_panel': {
    en: 'Convert to bookmarks panel',
    ru: 'Конвертировать в панель закладок',
    de: 'In Lesezeichen-Panel konvertieren',
    zh_CN: '转换为书签面板',
    zh_TW: '轉換為書籤面板',
  },
  'menu.tabs_panel.remove_panel': {
    en: 'Remove panel',
    ru: 'Удалить панель',
    de: 'Panel entfernen',
    zh: '移除面板',
  },
  // - History
  'menu.history.open': {
    en: 'Open',
    ru: 'Открыть',
    de: 'Öffnen',
    zh_CN: '打开',
    zh_TW: '開啟',
  },
  'menu.history.delete_visits': {
    en: n => (n === 1 ? 'Forget visit' : 'Forget visits'),
    ru: n => (n === 1 ? 'Забыть запись' : 'Забыть записи'),
    de: n => (n === 1 ? 'Besuch vergessen' : 'Besuche vergessen'),
    zh_CN: '删除记录',
    zh_TW: '刪除頁面',
  },
  'menu.history.delete_sites': {
    en: n => (n === 1 ? 'Forget site' : 'Forget sites'),
    ru: n => (n === 1 ? 'Забыть сайт' : 'Забыть сайты'),
    de: n => (n === 1 ? 'Seite vergessen' : 'Seiten vergessen'),
    zh_CN: '删除该站点的全部访问记录',
    zh_TW: '刪除與此網站有關的紀錄',
  },
  // - Common
  'menu.copy_urls': {
    en: n => (n === 1 || n === undefined ? 'Copy URL' : 'Copy URLs'),
    ru: n => (n === 1 || n === undefined ? 'Копировать адрес' : 'Копировать адреса'),
    de: n => (n === 1 || n === undefined ? 'URL kopieren' : 'URLs kopieren'),
    zh_CN: n => (n === 1 || n === undefined ? '复制网址' : '复制全部网址'),
    zh_TW: n => (n === 1 || n === undefined ? '複製網址' : '複製全部網址'),
  },
  'menu.copy_titles': {
    en: n => (n === 1 || n === undefined ? 'Copy title' : 'Copy titles'),
    ru: n => (n === 1 || n === undefined ? 'Копировать заголовок' : 'Копировать заголовки'),
    de: n => (n === 1 || n === undefined ? 'Titel kopieren' : 'Mehrere Titel kopieren'),
    zh_CN: n => (n === 1 || n === undefined ? '复制标题' : '复制全部标题'),
    zh_TW: n => (n === 1 || n === undefined ? '複製標題' : '複製全部標題'),
  },
  'menu.common.pin_panel': {
    en: 'Pin panel',
    ru: 'Закрепить панель',
    de: 'Panel anheften',
    zh_CN: '固定标签页',
    zh_TW: '釘選分頁',
  },
  'menu.common.unpin_panel': {
    en: 'Unpin panel',
    ru: 'Открепить панель',
    de: 'Panel lösen',
    zh_CN: '取消固定标签页',
    zh_TW: '取消釘選分頁',
  },
  'menu.common.conf': {
    en: 'Configure panel',
    ru: 'Настройки панели',
    de: 'Panel konfigurieren',
    zh_CN: '配置面板',
    zh_TW: '設定面板',
  },
  'menu.common.conf_tooltip': {
    en: 'Configure panel\nAlt: Basic panel config',
    ru: 'Настройки панели\nAlt: Базовые настройки панели',
    de: 'Panel konfigurieren\nAlt: Panel Grundkonfiguration',
    zh_CN: '配置面板\nAlt: 基本面板配置',
    zh_TW: '設定面板\nAlt: 基本面板設定',
  },
  'menu.panels.unload': {
    en: 'Unload',
    ru: 'Выгрузить',
    de: 'Entladen',
    zh_CN: '卸载面板',
    zh_TW: '卸載面板',
  },
  'menu.panels.hide_panel': {
    en: 'Hide panel',
    ru: 'Скрыть панель',
    de: 'Panel verstecken',
    zh_CN: '隐藏面板',
    zh_TW: '隱藏面板',
  },
  // - Menu Editor
  'menu.editor.reset': {
    en: 'Reset',
    ru: 'Сброс',
    de: 'Zurücksetzen',
    zh_CN: '重置',
    zh_TW: '重設',
  },
  'menu.editor.create_separator': {
    en: 'Create separator',
    ru: 'Создать разделитель',
    de: 'Trennlinie einfügen',
    zh_CN: '新建分隔条',
    zh_TW: '新增分隔線',
  },
  'menu.editor.create_sub_tooltip': {
    en: 'Create sub-menu',
    ru: 'Создать подменю',
    de: 'Untermenü erstellen',
    zh_CN: '创建子菜单',
    zh_TW: '建立子選單',
  },
  'menu.editor.up_tooltip': {
    en: 'Move up',
    ru: 'Вверх',
    de: 'Nach oben verschieben',
    zh_CN: '向上移动',
    zh_TW: '向上移動',
  },
  'menu.editor.down_tooltip': {
    en: 'Move down',
    ru: 'Вниз',
    de: 'Nach unten verschieben',
    zh_CN: '向下移动',
    zh_TW: '向下移動',
  },
  'menu.editor.disable_tooltip': {
    en: 'Disable',
    ru: 'Отключить',
    de: 'Deaktivieren',
    zh: '禁用',
  },
  'menu.editor.tabs_title': {
    en: 'Tabs',
    ru: 'Вкладки',
    de: 'Tabs',
    zh_CN: '标签页',
    zh_TW: '分頁',
  },
  'menu.editor.tabs_panel_title': {
    en: 'Tabs panel',
    ru: 'Панель вкладок',
    de: 'Tab-Panel',
    zh_CN: '标签页面板',
    zh_TW: '分頁面板',
  },
  'menu.editor.bookmarks_title': {
    en: 'Bookmarks',
    ru: 'Закладки',
    de: 'Lesezeichen',
    zh_CN: '书签',
    zh_TW: '書籤',
  },
  'menu.editor.bookmarks_panel_title': {
    en: 'Bookmarks panel',
    ru: 'Панель закладок',
    de: 'Lesezeichen-Panel',
    zh_CN: '书签面板',
    zh_TW: '書籤面板',
  },
  'menu.editor.inline_group_title': {
    en: 'Sub-menu label...',
    ru: 'Название подменю...',
    de: 'Untermenü Bezeichnung...',
    zh_CN: '子菜单标签...',
    zh_TW: '子選單標籤...',
  },

  // ---
  // -- Settings
  // -
  'settings.opt_true': {
    en: 'on',
    ru: 'вкл',
    de: 'Ein',
    zh_CN: '打开',
    zh_TW: '啟用',
  },
  'settings.opt_false': {
    en: 'off',
    ru: 'выкл',
    de: 'Aus',
    zh_CN: '关闭',
    zh_TW: '停用',
  },

  // ---
  // -- Time
  // -
  'time.month_0': {
    en: 'January',
    ru: 'Январь',
    de: 'Januar',
    zh: '一月',
  },
  'time.month_1': {
    en: 'February',
    ru: 'Февраль',
    de: 'Februar',
    zh: '二月',
  },
  'time.month_2': {
    en: 'March',
    ru: 'Март',
    de: 'März',
    zh: '三月',
  },
  'time.month_3': {
    en: 'April',
    ru: 'Апрель',
    de: 'April',
    zh: '四月',
  },
  'time.month_4': {
    en: 'May',
    ru: 'Май',
    de: 'Mai',
    zh: '五月',
  },
  'time.month_5': {
    en: 'June',
    ru: 'Июнь',
    de: 'Juni',
    zh: '六月',
  },
  'time.month_6': {
    en: 'July',
    ru: 'Июль',
    de: 'Juli',
    zh: '七月',
  },
  'time.month_7': {
    en: 'August',
    ru: 'Август',
    de: 'August',
    zh: '八月',
  },
  'time.month_8': {
    en: 'September',
    ru: 'Сентябрь',
    de: 'September',
    zh: '九月',
  },
  'time.month_9': {
    en: 'October',
    ru: 'Октябрь',
    de: 'Oktober',
    zh: '十月',
  },
  'time.month_10': {
    en: 'November',
    ru: 'Ноябрь',
    de: 'November',
    zh: '十一月',
  },
  'time.month_11': {
    en: 'December',
    ru: 'Декабрь',
    de: 'Dezember',
    zh: '十二月',
  },
  'time.today': {
    en: 'Today',
    ru: 'Сегодня',
    de: 'Heute',
    zh: '今日',
  },
  'time.yesterday': {
    en: 'Yesterday',
    ru: 'Вчера',
    de: 'Gestern',
    zh: '昨日',
  },
  'time.this_week': {
    en: 'This week',
    ru: 'Эта неделя',
    de: 'Diese Woche',
    zh_CN: '本周',
    zh_TW: '本週',
  },
  'time.passed_short': {
    en: ms => {
      if (ms === undefined || typeof ms === 'string') return '?'

      const s = Math.trunc(ms / 1000)
      if (s < 60) return `${s}s`

      const rs = s % 60
      const m = (s - rs) / 60
      if (m < 60) {
        if (rs > 0) return `${m}m, ${rs}s`
        else return `${m}m`
      }

      const rm = m % 60
      const h = (m - rm) / 60
      if (h < 24) {
        if (rm > 0) return `${h}h, ${rm}m`
        else return `${h}h`
      }

      const rh = h % 24
      const d = (h - rh) / 24
      if (rh > 0) return `${d}d, ${rh}h`
      else return `${d}d`
    },
    ru: ms => {
      if (ms === undefined || typeof ms === 'string') return '?'

      const s = Math.trunc(ms / 1000)
      if (s < 60) return `${s}с`

      const rs = s % 60
      const m = (s - rs) / 60
      if (m < 60) {
        if (rs > 0) return `${m}м, ${rs}с`
        else return `${m}м`
      }

      const rm = m % 60
      const h = (m - rm) / 60
      if (h < 24) {
        if (rm > 0) return `${h}ч, ${rm}м`
        else return `${h}ч`
      }

      const rh = h % 24
      const d = (h - rh) / 24
      if (rh > 0) return `${d}д, ${rh}ч`
      else return `${d}д`
    },
    de: ms => {
      if (ms === undefined || typeof ms === 'string') return '?'

      const s = Math.trunc(ms / 1000)
      if (s < 60) return `${s}s`

      const rs = s % 60
      const m = (s - rs) / 60
      if (m < 60) {
        if (rs > 0) return `${m}min, ${rs}s`
        else return `${m}min`
      }

      const rm = m % 60
      const h = (m - rm) / 60
      if (h < 24) {
        if (rm > 0) return `${h}h, ${rm}min`
        else return `${h}h`
      }

      const rh = h % 24
      const d = (h - rh) / 24
      if (rh > 0) return `${d}d, ${rh}h`
      else return `${d}d`
    },
    zh_CN: ms => {
      if (ms === undefined || typeof ms === 'string') return '?'

      const s = Math.trunc(ms / 1000)
      if (s < 60) return `${s}秒`

      const rs = s % 60
      const m = (s - rs) / 60
      if (m < 60) {
        if (rs > 0) return `${m}分, ${rs}秒`
        else return `${m}分`
      }

      const rm = m % 60
      const h = (m - rm) / 60
      if (h < 24) {
        if (rm > 0) return `${h}小时, ${rm}分`
        else return `${h}小时`
      }

      const rh = h % 24
      const d = (h - rh) / 24
      if (rh > 0) return `${d}天, ${rh}小时`
      else return `${d}天`
    },
    zh_TW: ms => {
      if (ms === undefined || typeof ms === 'string') return '?'

      const s = Math.trunc(ms / 1000)
      if (s < 60) return `${s}秒`

      const rs = s % 60
      const m = (s - rs) / 60
      if (m < 60) {
        if (rs > 0) return `${m}分, ${rs}秒`
        else return `${m}分`
      }

      const rm = m % 60
      const h = (m - rm) / 60
      if (h < 24) {
        if (rm > 0) return `${h}小時, ${rm}分`
        else return `${h}小時`
      }

      const rh = h % 24
      const d = (h - rh) / 24
      if (rh > 0) return `${d}天, ${rh}小時`
      else return `${d}天`
    },
  },

  // ---
  // -- Upgrade screen
  // -
  'upgrade.title': {
    en: 'Upgrading',
    ru: 'Обновление',
    de: 'Aktualisiere',
    zh_CN: '升级',
    zh_TW: '升級',
  },
  'upgrade.btn.backup': {
    en: 'Save backup',
    ru: 'Сохранить резервную копию данных',
    de: 'Sicherung speichern',
    zh_CN: '保存备份',
    zh_TW: '儲存備份',
  },
  'upgrade.btn.continue': {
    en: 'Continue',
    ru: 'Продолжить',
    de: 'Fortfahren',
    zh_CN: '继续',
    zh_TW: '繼續',
  },
  'upgrade.status.done': {
    en: 'Done',
    ru: 'Готово',
    de: 'Abgeschlossen',
    zh: '已完成',
  },
  'upgrade.status.in_progress': {
    en: 'In progress',
    ru: 'В процессе',
    de: 'Läuft',
    zh_CN: '进行中',
    zh_TW: '進行中',
  },
  'upgrade.status.pending': {
    en: 'Pending',
    ru: 'Ожидание',
    de: 'Ausstehend',
    zh: '等待中',
  },
  'upgrade.status.err': {
    en: 'Error',
    ru: 'Ошибка',
    de: 'Fehler',
    zh_CN: '错误',
    zh_TW: '錯誤',
  },
  'upgrade.status.no': {
    en: 'No data',
    ru: 'Нет данных',
    de: 'Kein Daten',
    zh_CN: '没有数据',
    zh_TW: '沒有資料',
  },
  'upgrade.initializing': {
    en: 'Initializing',
    ru: 'Инициализация',
    de: 'Initialisiere',
    zh: '正在初始化',
  },
  'upgrade.settings': {
    en: 'Settings',
    ru: 'Настройки',
    de: 'Einstellungen',
    zh_CN: '设置',
    zh_TW: '設定',
  },
  'upgrade.panels_nav': {
    en: 'Panels and navigation',
    ru: 'Панели и навигация',
    de: 'Panels und Navigation',
    zh_CN: '面板和导航',
    zh_TW: '面板和導覽',
  },
  'upgrade.ctx_menu': {
    en: 'Context menu',
    ru: 'Контекстное меню',
    de: 'Kontextmenü',
    zh_CN: '上下文菜单',
    zh_TW: '快捷選單',
  },
  'upgrade.snapshots': {
    en: 'Snapshots',
    ru: 'Снепшоты',
    de: 'Schnappschüsse',
    zh: '快照',
  },
  'upgrade.fav_cache': {
    en: 'Favicons cache',
    ru: 'Кэш иконок',
    de: 'Favicons Cache',
    zh_CN: '网站图标缓存',
    zh_TW: '網站圖示快取',
  },
  'upgrade.styles': {
    en: 'Custom styles',
    ru: 'Стили',
    de: 'Benutzerdefinierte Stile',
    zh_CN: '自定义样式',
    zh_TW: '自訂樣式',
  },
  'upgrade.data_ready': {
    en: 'All data prepared',
    ru: 'Все данные подготовлены',
    de: 'Alle Daten vorbereitet',
    zh_CN: '全部数据准备就绪',
    zh_TW: '全部資料準備就緒',
  },
  'upgrade.data_ready_note': {
    en: 'You can save a backup and continue',
    ru: 'Вы можете сохранить резервную копию и продолжить',
    de: 'Sie können ein Backup speichern und fortfahren',
    zh_CN: '你可以保存备份并继续',
    zh_TW: '你可以儲存備份並繼續',
  },
  'upgrade.links': {
    en: 'Updating Sidebery pages',
    ru: 'Обновление страниц Sidebery',
    de: 'Aktualisiere Sidebery Seiten',
    zh_CN: '正在更新 Sidebery 页面',
    zh_TW: '正在更新 Sidebery 頁面',
  },
  'upgrade.err.backup': {
    en: 'Cannot prepare backup',
    ru: 'Невозможно подготовить резервную копию',
    de: 'Kann keine Sicherung vorbereiten',
    zh_CN: '无法准备备份',
    zh_TW: '無法準備備份',
  },
  'upgrade.err.backup_note': {
    en: 'Unable to get stored data',
    ru: 'Невозможно получить сохраненные данные',
    de: 'Kann gespeicherte Daten nicht abrufen',
    zh_CN: '无法获取存储的数据',
    zh_TW: '無法讀取儲存的資料',
  },
  'upgrade.err.get_stored': {
    en: 'Cannot get stored data',
    ru: 'Невозможно получить данные старой версии',
    de: 'Kann gespeicherte Daten nicht abrufen',
    zh_CN: '无法获取存储的数据',
    zh_TW: '無法讀取儲存的資料',
  },
  'upgrade.err.clear_stored': {
    en: 'Cannot clear old data',
    ru: 'Невозможно удалить старые данные',
    de: 'Kann alte Daten nicht löschen',
    zh_CN: '无法清除旧数据',
    zh_TW: '無法清除舊資料',
  },
  'upgrade.err.set_stored': {
    en: 'Cannot save new data',
    ru: 'Невозможно сохранить новые данные',
    de: 'Kann neue Daten nicht speichern',
    zh_CN: '无法保存新数据',
    zh_TW: '無法儲存新資料',
  },
  'upgrade.err.finish': {
    en: 'Sidebery is unable to finish the upgrade. Try to manually remove the old version of Sidebery, reload the browser and install the new version of Sidebery.',
    ru: 'Sidebery не может завершить обновление. Попробуйте вручную удалить старую версию Sidebery, перезагрузить браузер и установить новую версию Sidebery.',
    de: 'Sidebery kann das Upgrade nicht abschließen. Versuchen Sie, die alte Version von Sidebery manuell zu entfernen, den Browser neu zu laden und die neue Version von Sidebery zu installieren.',
    zh_CN:
      'Sidebery 无法完成升级。请尝试手动删除旧版本的 Sidebery，重新加载浏览器并安装新版本的 Sidebery。',
    zh_TW:
      'Sidebery 無法完成升級。請嘗試手動刪除舊版本的 Sidebery，重新開啟瀏覽器並安裝新版本的 Sidebery。',
  },
  'upgrade.done': {
    en: 'Sidebery successfully upgraded',
    ru: 'Sidebery успешно обновлен',
    de: 'Sidebery erfolgreich aktualisiert',
    zh_CN: 'Sidebery 升级成功',
    zh_TW: 'Sidebery 升級成功',
  },
  'upgrade.done_note': {
    en: 'Reloading...',
    ru: 'Перезагрузка...',
    de: 'Neu laden...',
    zh_CN: '重新加载...',
    zh_TW: '重新載入...',
  },
}

if (!window.translations) window.translations = commonTranslations
else Object.assign(window.translations, commonTranslations)
