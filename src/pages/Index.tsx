import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const newsItems = [
    { id: 1, title: 'Обновление корпоративной политики', date: '25 ноября 2025', category: 'Кадры', priority: 'high' },
    { id: 2, title: 'Новые шаблоны отчетности', date: '24 ноября 2025', category: 'Бухгалтерия', priority: 'medium' },
    { id: 3, title: 'Изменения в трудовом законодательстве', date: '23 ноября 2025', category: 'Юридический', priority: 'high' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Сдача квартальной отчетности', date: '30 ноября 2025', time: '15:00' },
    { id: 2, title: 'Обучение по новым процедурам', date: '2 декабря 2025', time: '10:00' },
    { id: 3, title: 'Аудиторская проверка', date: '5 декабря 2025', time: '09:00' },
  ];

  const instructions = [
    { id: 1, title: 'Процедура оформления отпуска', category: 'Кадры', updated: '20.11.2025' },
    { id: 2, title: 'Порядок заключения договоров', category: 'Юридический', updated: '18.11.2025' },
    { id: 3, title: 'Инструкция по ведению кассы', category: 'Бухгалтерия', updated: '15.11.2025' },
    { id: 4, title: 'Оформление командировок', category: 'Кадры', updated: '12.11.2025' },
  ];

  const documentTemplates = [
    { id: 1, name: 'Заявление на отпуск', category: 'Кадры', format: 'DOCX' },
    { id: 2, name: 'Договор подряда', category: 'Юридический', format: 'DOCX' },
    { id: 3, name: 'Акт сверки', category: 'Бухгалтерия', format: 'XLSX' },
    { id: 4, name: 'Приказ о командировке', category: 'Кадры', format: 'DOCX' },
  ];

  const myTickets = [
    { id: 1, title: 'Запрос на обновление данных', status: 'В работе', priority: 'medium', created: '26.11.2025' },
    { id: 2, title: 'Консультация по договору', status: 'Открыт', priority: 'high', created: '25.11.2025' },
  ];

  const myReports = [
    { id: 1, name: 'ООО "Техника Плюс"', period: 'Ноябрь 2025', status: 'Готов' },
    { id: 2, name: 'ООО "Строймонтаж"', period: 'Ноябрь 2025', status: 'В процессе' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Новые уведомления</CardTitle>
              <Icon name="Bell" className="text-primary" size={24} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">За последние 24 часа</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Активные тикеты</CardTitle>
              <Icon name="Ticket" className="text-primary" size={24} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-sm text-muted-foreground">Требуют внимания</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Ближайшие события</CardTitle>
              <Icon name="CalendarDays" className="text-primary" size={24} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">На этой неделе</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Newspaper" size={20} />
              Новости компании
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {newsItems.map((news) => (
              <div key={news.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{news.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{news.date}</span>
                    <span>•</span>
                    <Badge variant="outline" className="text-xs">{news.category}</Badge>
                  </div>
                </div>
                <Badge variant={news.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                  {news.priority === 'high' ? 'Важно' : 'Стандарт'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Календарь событий
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon name="Clock" className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">{event.date} в {event.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderInstructions = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input placeholder="Поиск инструкций..." className="max-w-md" />
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="hr">Кадры</SelectItem>
            <SelectItem value="legal">Юридический</SelectItem>
            <SelectItem value="accounting">Бухгалтерия</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {instructions.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-base flex items-start gap-2">
                <Icon name="BookOpen" className="text-primary mt-1" size={18} />
                <span className="flex-1">{item.title}</span>
              </CardTitle>
              <CardDescription>Обновлено: {item.updated}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{item.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input placeholder="Поиск шаблонов..." className="max-w-md" />
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="hr">Кадры</SelectItem>
            <SelectItem value="legal">Юридический</SelectItem>
            <SelectItem value="accounting">Бухгалтерия</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {documentTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="FileText" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-sm">{template.name}</CardTitle>
              <CardDescription className="text-xs">{template.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-xs">{template.format}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPersonalCabinet = () => (
    <div className="space-y-6">
      <Tabs defaultValue="tickets" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="tickets">Мои тикеты</TabsTrigger>
          <TabsTrigger value="reports">Отчёты по ООО</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Тикет-система</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать тикет
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Новый тикет</DialogTitle>
                  <DialogDescription>Опишите ваш запрос или проблему</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="ticket-title">Тема</Label>
                    <Input id="ticket-title" placeholder="Краткое описание" />
                  </div>
                  <div>
                    <Label htmlFor="ticket-category">Категория</Label>
                    <Select>
                      <SelectTrigger id="ticket-category">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hr">Кадры</SelectItem>
                        <SelectItem value="legal">Юридический</SelectItem>
                        <SelectItem value="accounting">Бухгалтерия</SelectItem>
                        <SelectItem value="it">IT-поддержка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ticket-description">Описание</Label>
                    <Textarea id="ticket-description" placeholder="Подробное описание вашего запроса" rows={4} />
                  </div>
                  <Button className="w-full">Отправить тикет</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-3">
            {myTickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-2">{ticket.title}</CardTitle>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Создан: {ticket.created}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant={ticket.status === 'В работе' ? 'default' : 'secondary'}>
                        {ticket.status}
                      </Badge>
                      <Badge variant={ticket.priority === 'high' ? 'destructive' : 'outline'} className="text-xs">
                        {ticket.priority === 'high' ? 'Высокий' : 'Средний'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <h3 className="text-lg font-semibold">Личные отчёты по ООО</h3>
          <div className="space-y-3">
            {myReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Building2" className="text-primary" size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{report.name}</CardTitle>
                        <CardDescription className="text-xs">Период: {report.period}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={report.status === 'Готов' ? 'default' : 'secondary'}>
                        {report.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Icon name="Download" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-sidebar text-sidebar-foreground p-6 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Building" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg">Корп. Портал</h1>
            <p className="text-xs text-sidebar-foreground/60">Enterprise</p>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'dashboard' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <Icon name="LayoutDashboard" size={20} />
            <span className="font-medium">Главная</span>
          </button>

          <button
            onClick={() => setActiveSection('instructions')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'instructions' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <Icon name="BookOpen" size={20} />
            <span className="font-medium">Инструкции</span>
          </button>

          <button
            onClick={() => setActiveSection('templates')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'templates' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <Icon name="FileText" size={20} />
            <span className="font-medium">Шаблоны</span>
          </button>

          <button
            onClick={() => setActiveSection('cabinet')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'cabinet' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <Icon name="User" size={20} />
            <span className="font-medium">Личный кабинет</span>
          </button>
        </nav>

        <div className="pt-8 mt-auto border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Icon name="User" size={20} />
            </div>
            <div>
              <p className="font-medium text-sm">Иван Петров</p>
              <p className="text-xs text-sidebar-foreground/60">Бухгалтер</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {activeSection === 'dashboard' && 'Добро пожаловать!'}
              {activeSection === 'instructions' && 'Инструкции по разделам'}
              {activeSection === 'templates' && 'Шаблоны документов'}
              {activeSection === 'cabinet' && 'Личный кабинет'}
            </h2>
            <p className="text-muted-foreground">
              {activeSection === 'dashboard' && 'Обзор ключевых показателей и последних обновлений'}
              {activeSection === 'instructions' && 'Внутренние регламенты и процедуры компании'}
              {activeSection === 'templates' && 'Готовые шаблоны документов для работы'}
              {activeSection === 'cabinet' && 'Управление тикетами и отчётами'}
            </p>
          </div>

          {activeSection === 'dashboard' && renderDashboard()}
          {activeSection === 'instructions' && renderInstructions()}
          {activeSection === 'templates' && renderTemplates()}
          {activeSection === 'cabinet' && renderPersonalCabinet()}
        </div>
      </main>
    </div>
  );
};

export default Index;
