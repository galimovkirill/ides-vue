export const sidebarNavigation = {
    schoolAdmin: [
        { label: 'Главная', icon: 'menu-home', routeName: 'dashboard' },
        {
            label: 'Учебное заведение',
            icon: 'menu-institution',
            routeName: 'institution',
        },
        { label: 'Расписание', icon: 'menu-schedules', routeName: 'schedule' },
        { label: 'Чаты', icon: 'menu-chats', routeName: 'chats' },
        { label: 'База знаний', icon: 'menu-catalog', routeName: 'library' },
        { label: 'Студенты', icon: 'menu-students', routeName: 'students' },
        { label: 'Учебные группы', icon: 'menu-groups', routeName: 'groups' },
        { label: 'Преподаватели', icon: 'menu-staff', routeName: 'teachers' },
        { label: 'Учебные планы', icon: 'menu-plans', routeName: 'plans' },
        { label: 'Настройки', icon: 'menu-settings', routeName: 'settings' },
    ],
    student: [
        { label: 'Главная', icon: 'menu-home', routeName: 'dashboard' },
        { label: 'Расписание', icon: 'menu-schedules', routeName: 'schedule' },
        { label: 'Задания', icon: 'menu-assignments', routeName: 'dashboard' }, // tmp
        { label: 'Чаты', icon: 'menu-chats', routeName: 'chats' },
        { label: 'База знаний', icon: 'menu-catalog', routeName: 'library' },
        { label: 'Преподаватели', icon: 'menu-staff', routeName: 'teachers' },
        { label: 'Моя группа', icon: 'menu-groups', routeName: 'dashboard' }, // tmp
        { label: 'Семестр', icon: 'menu-students', routeName: 'dashboard' }, // tmp
        { label: 'Настройки', icon: 'menu-settings', routeName: 'settings' },
    ],
    staff: [
        { label: 'Главная', icon: 'menu-home', routeName: 'dashboard' },
        { label: 'Расписание', icon: 'menu-schedules', routeName: 'schedule' },
        {
            label: 'Задания',
            icon: 'menu-assignments',
            routeName: 'assignments',
        },
        { label: 'Чаты', icon: 'menu-chats', routeName: 'chats' },
        { label: 'База знаний', icon: 'menu-catalog', routeName: 'library' },
        { label: 'Студенты', icon: 'menu-students', routeName: 'students' },
        { label: 'Настройки', icon: 'menu-settings', routeName: 'settings' },
    ],
    parent: [
        { label: 'Главная', icon: 'menu-home', routeName: 'dashboard' },
        { label: 'Чаты', icon: 'menu-chats', routeName: 'chats' },
        { label: 'Настройки', icon: 'menu-settings', routeName: 'settings' },
    ],
}
