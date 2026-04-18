
    const palette = {
      blue: {
        bg: "linear-gradient(180deg, rgba(43, 156, 255, 0.96), rgba(15, 101, 216, 0.95))",
        accent: "#b9e4ff"
      },
      green: {
        bg: "linear-gradient(180deg, rgba(69, 212, 111, 0.94), rgba(37, 137, 64, 0.96))",
        accent: "#d6ffe0"
      },
      amber: {
        bg: "linear-gradient(180deg, rgba(255, 191, 71, 0.95), rgba(201, 125, 29, 0.96))",
        accent: "#fff1c8"
      },
      orange: {
        bg: "linear-gradient(180deg, rgba(255, 143, 63, 0.94), rgba(204, 92, 27, 0.96))",
        accent: "#ffd9bf"
      },
      slate: {
        bg: "linear-gradient(180deg, rgba(118, 129, 149, 0.94), rgba(68, 76, 92, 0.96))",
        accent: "#f0f5ff"
      }
    };

    const scenario = {
      incident: "Сход 2 вагонов на перегоне",
      location: "КрасЖД • 4634 км • перегон с контактной сетью",
      docs: [
        "Распоряжение об оперативном штабе 2417р",
        "Инструктивные указания по АВР 2182/р",
        "Порядок сетевого графика КрасЖД",
        "ТЗ цифрового плана КрасЖД 2022"
      ]
    };

    const baseTasks = [
      { id: 1, title: "Оповещение и сбор оперативного штаба", owner: "Руководитель штаба", team: "Штаб", start: 0, duration: 12, progress: 100, color: "slate", status: "Завершено", delay: 0 },
      { id: 2, title: "Схема происшествия и исходные данные", owner: "НВП", team: "ДАВС", start: 0, duration: 18, progress: 92, color: "blue", status: "Подтверждено", delay: 0 },
      { id: 3, title: "Отправление восстановительного поезда", owner: "НВП", team: "ВП", start: 8, duration: 32, progress: 80, color: "amber", status: "На маршруте", delay: 0 },
      { id: 4, title: "Ограждение места и пожарное прикрытие", owner: "Пожарный поезд", team: "ФГП ВО ЖДТ", start: 10, duration: 24, progress: 72, color: "orange", status: "Выполняется", delay: 0 },
      { id: 5, title: "Подготовка ЕДК-1000 и строповка", owner: "ВЧДЭ / крановая группа", team: "ВП", start: 36, duration: 30, progress: 48, color: "amber", status: "Развёртывание", delay: 0 },
      { id: 6, title: "Подъём и уборка сошедшего подвижного состава", owner: "НВП", team: "ВП + ВЧДЭ", start: 64, duration: 58, progress: 34, color: "green", status: "Основная операция", delay: 0 },
      { id: 7, title: "Восстановление пути", owner: "ПЧ", team: "Дистанция пути", start: 110, duration: 42, progress: 18, color: "blue", status: "Ожидает освобождение", delay: 12 },
      { id: 8, title: "Проверка СЦБ и связи", owner: "ШЧ / НС", team: "ШЧ + НС", start: 136, duration: 28, progress: 10, color: "slate", status: "Подготовка", delay: 8 },
      { id: 9, title: "Восстановление контактной сети", owner: "ЭЧ", team: "Электроснабжение", start: 146, duration: 24, progress: 0, color: "orange", status: "Ожидание окна", delay: 6 },
      { id: 10, title: "Контрольный пропуск и открытие движения", owner: "Штаб / ПЧ", team: "Штаб + ПЧ", start: 172, duration: 14, progress: 0, color: "green", status: "Ожидает", delay: 0 }
    ];

    const optimizedTasks = [
      { id: 1, title: "Оповещение и сбор оперативного штаба", owner: "Руководитель штаба", team: "Штаб", start: 0, duration: 10, progress: 100, color: "slate", status: "Завершено", delay: 0 },
      { id: 2, title: "Схема происшествия и исходные данные", owner: "НВП", team: "ДАВС", start: 0, duration: 14, progress: 100, color: "blue", status: "Подтверждено", delay: 0 },
      { id: 3, title: "Отправление восстановительного поезда", owner: "НВП", team: "ВП", start: 6, duration: 26, progress: 92, color: "amber", status: "На месте", delay: 0 },
      { id: 4, title: "Ограждение места и пожарное прикрытие", owner: "Пожарный поезд", team: "ФГП ВО ЖДТ", start: 8, duration: 20, progress: 88, color: "orange", status: "Закрыто", delay: 0 },
      { id: 5, title: "Подготовка ЕДК-1000 и строповка", owner: "ВЧДЭ / крановая группа", team: "ВП", start: 28, duration: 24, progress: 70, color: "amber", status: "Ускорено", delay: 0 },
      { id: 6, title: "Подъём и уборка сошедшего подвижного состава", owner: "НВП", team: "ВП + ВЧДЭ", start: 50, duration: 46, progress: 54, color: "green", status: "Ускоренное окно", delay: 0 },
      { id: 7, title: "Восстановление пути", owner: "ПЧ", team: "Дистанция пути", start: 88, duration: 34, progress: 36, color: "blue", status: "Старт раньше", delay: 4 },
      { id: 8, title: "Проверка СЦБ и связи", owner: "ШЧ / НС", team: "ШЧ + НС", start: 112, duration: 22, progress: 28, color: "slate", status: "Параллельно", delay: 2 },
      { id: 9, title: "Восстановление контактной сети", owner: "ЭЧ", team: "Электроснабжение", start: 118, duration: 20, progress: 20, color: "orange", status: "Параллельно", delay: 0 },
      { id: 10, title: "Контрольный пропуск и открытие движения", owner: "Штаб / ПЧ", team: "Штаб + ПЧ", start: 140, duration: 12, progress: 0, color: "green", status: "Готовится", delay: 0 }
    ];

    const people = [
      { name: "Неустроев", role: "Руководитель штаба", unit: "КрасЖД", status: "Координирует АВР", badge: "в штабе", stateClass: "status-ok", avatar: "blue" },
      { name: "Раменский", role: "Начальник ДАВС", unit: "ДАВС", status: "Контролирует восстановительный поезд", badge: "онлайн", stateClass: "status-ok", avatar: "green" },
      { name: "НВП", role: "Начальник восстановительного поезда", unit: "ВП", status: "Ведёт основной подъём", badge: "на месте", stateClass: "status-ok", avatar: "yellow" },
      { name: "ПЧ", role: "Дистанция пути", unit: "Путь", status: "Готовит звено восстановления пути", badge: "готовность", stateClass: "status-warn", avatar: "green" },
      { name: "ШЧ", role: "СЦБ", unit: "ШЧ", status: "Ожидает допуск после уборки ПС", badge: "ожидание", stateClass: "status-warn", avatar: "slate" },
      { name: "ЭЧ", role: "Электроснабжение", unit: "ЭЧ", status: "Работа по контактной сети после окна", badge: "+6 мин", stateClass: "status-bad", avatar: "yellow" },
      { name: "НС", role: "Дирекция связи", unit: "НС", status: "Поддерживает канал штаба и подтверждение связи", badge: "связь", stateClass: "status-ok", avatar: "blue" },
      { name: "ФГП ВО ЖДТ", role: "Пожарный поезд", unit: "Прикрытие", status: "Ограждение места и пожарная безопасность", badge: "боеготов", stateClass: "status-ok", avatar: "green" }
    ];

    const chatSeed = [
      { author: "Руководитель штаба", text: "Подтверждаем работу по схеме происшествия. НВП, обновите силы и средства.", time: "12:04", outgoing: false },
      { author: "НВП", text: "Восстановительный поезд отправлен. По ТЗ и сетевому графику запускаем параллельное ограждение и подготовку ЕДК-1000.", time: "12:08", outgoing: false },
      { author: "ПЧ", text: "Звено пути подготовлено, ждём освобождение зоны после уборки сошедшего ПС.", time: "12:19", outgoing: false },
      { author: "ШЧ / НС", text: "Связь со штабом устойчивая, проверку СЦБ начнём сразу после допуска.", time: "12:24", outgoing: false },
      { author: "Штаб", text: "Принято. Держим оптимизированный сценарий как резервный вариант.", time: "12:28", outgoing: true }
    ];

    const cloneData = (value) => JSON.parse(JSON.stringify(value));

    let tasks = cloneData(baseTasks);
    let messages = cloneData(chatSeed);
    let optimized = false;
    let planGenerated = false;

    const screens = [...document.querySelectorAll(".screen")];
    const navButtons = [...document.querySelectorAll(".nav-btn")];
    const tasksPreview = document.getElementById("tasksPreview");
    const gantt = document.getElementById("gantt");
    const peopleList = document.getElementById("peopleList");
    const chatList = document.getElementById("chatList");
    const taskStatusList = document.getElementById("taskStatusList");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");

    navButtons.forEach((button) => {
      button.addEventListener("click", () => setScreen(button.dataset.screen));
    });

    document.getElementById("generatePlanBtn").addEventListener("click", () => {
      planGenerated = true;
      optimized = false;
      tasks = cloneData(baseTasks);
      updateAll();
      setScreen("plan");
    });

    document.getElementById("optimizePlanBtn").addEventListener("click", () => {
      optimized = !optimized;
      tasks = cloneData(optimized ? optimizedTasks : baseTasks);
      updateAll();
    });

    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = chatInput.value.trim();
      if (!value) return;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      messages.push({
        author: "Штаб",
        text: value,
        time: `${hh}:${mm}`,
        outgoing: true
      });
      chatInput.value = "";
      renderChat();
    });

    function setScreen(name) {
      screens.forEach((screen) => {
        screen.classList.toggle("active", screen.id === `screen-${name}`);
      });
      navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.screen === name);
      });
    }

    function minutesToLabel(minutes) {
      const startMinutes = 12 * 60;
      const total = startMinutes + minutes;
      const hh = String(Math.floor(total / 60)).padStart(2, "0");
      const mm = String(total % 60).padStart(2, "0");
      return `${hh}:${mm}`;
    }

    function totalDuration() {
      return tasks.reduce((max, task) => Math.max(max, task.start + task.duration + task.delay), 0);
    }

    function totalLabel() {
      const total = totalDuration();
      const hours = Math.floor(total / 60);
      const minutes = total % 60;
      return `${hours ? `${hours} ч ` : ""}${minutes} мин`;
    }

    function avgProgress() {
      return Math.round(tasks.reduce((sum, task) => sum + task.progress, 0) / tasks.length);
    }

    function delayTasks() {
      return tasks.filter((task) => task.delay > 0);
    }

    function renderTaskPreview() {
      const previewTasks = tasks.slice(0, 5);
      tasksPreview.innerHTML = previewTasks.map((task) => {
        const colors = palette[task.color];
        return `
          <div class="task-preview-card">
            <div class="task-preview-head">
              <div>
                <strong>${task.title}</strong>
                <span>${task.owner} • ${minutesToLabel(task.start)}–${minutesToLabel(task.start + task.duration)}</span>
              </div>
              <div class="chip">${task.progress}%</div>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${task.progress}%; background:${colors.accent};"></div>
            </div>
          </div>
        `;
      }).join("");
    }

    function renderGantt() {
      const totalMinutes = Math.max(210, totalDuration() + 20);
      gantt.style.setProperty("--timeline-total", totalMinutes);

      const tickStep = 20;
      const ticks = [];
      for (let value = 0; value <= totalMinutes; value += tickStep) {
        ticks.push(value);
      }

      const tickMarkup = ticks.map((value) => {
        const left = `calc(var(--minute-width) * ${value})`;
        return `<span class="time-tick" style="left:${left};">${minutesToLabel(value)}</span>`;
      }).join("");

      const currentLineLeft = Math.min(totalMinutes, optimized ? 96 : 122);
      const currentLine = `<div class="current-line" style="left:calc(var(--minute-width) * ${currentLineLeft});"></div>`;

      const rows = tasks.map((task) => {
        const colors = palette[task.color];
        const width = `calc(var(--minute-width) * ${task.duration})`;
        const left = `calc(var(--minute-width) * ${task.start})`;
        const delayBadge = task.delay ? `<div class="task-delay-badge">+${task.delay} мин</div>` : "";
        return `
          <div class="gantt-row">
            <div class="gantt-label">
              <strong>${task.title}</strong>
              <span>${task.owner}<br>${task.team}</span>
            </div>
            <div class="timeline-row">
              ${currentLine}
              <div class="task-bar" style="left:${left}; width:${width}; background:${colors.bg};">
                ${delayBadge}
                <div class="task-bar-head">
                  <div>
                    <strong>${task.title}</strong>
                    <span>${task.owner} • ${minutesToLabel(task.start)}–${minutesToLabel(task.start + task.duration)}</span>
                  </div>
                </div>
                <div class="task-progress" style="width:${task.progress}%; background:${colors.accent};"></div>
              </div>
            </div>
          </div>
        `;
      }).join("");

      gantt.innerHTML = `
        <div class="gantt-header">
          <div class="gantt-label">
            <strong>Операция</strong>
            <span>Ответственный / подразделение</span>
          </div>
          <div class="timeline">
            ${currentLine}
            ${tickMarkup}
          </div>
        </div>
        ${rows}
      `;

      document.getElementById("timelineHint").textContent = `Текущая отметка: ${minutesToLabel(currentLineLeft)}`;
    }

    function renderPeople() {
      peopleList.innerHTML = people.map((person) => `
        <div class="person-card">
          <div class="person-top">
            <div class="person-meta">
              <div class="avatar ${person.avatar}">${person.name[0]}</div>
              <div class="meta-copy">
                <strong>${person.name}</strong>
                <span>${person.role} • ${person.unit}</span>
              </div>
            </div>
            <div class="status-pill ${person.stateClass}">${person.badge}</div>
          </div>
          <div style="margin-top:10px;">
            <span class="status-pill ${person.stateClass}">${person.status}</span>
          </div>
        </div>
      `).join("");
    }

    function renderChat() {
      chatList.innerHTML = messages.map((message) => `
        <div class="chat-item ${message.outgoing ? "outgoing" : ""}">
          <div class="chat-top">
            <div class="chat-meta">
              <div class="avatar ${message.outgoing ? "blue" : "green"}">${message.author[0]}</div>
              <div class="chat-body">
                <strong>${message.author}</strong>
                <span>${message.time}</span>
              </div>
            </div>
          </div>
          <div class="chat-text">${message.text}</div>
        </div>
      `).join("");
    }

    function renderTaskStatuses() {
      taskStatusList.innerHTML = tasks.map((task) => {
        const stateClass = task.delay ? "status-bad" : task.progress >= 60 ? "status-ok" : "status-warn";
        const issue = task.delay ? `Отклонение +${task.delay} мин` : "Без отклонений";
        return `
          <div class="status-card">
            <div class="status-top">
              <div>
                <strong>${task.title}</strong>
                <span>${task.owner} • ${task.team} • ${minutesToLabel(task.start)}–${minutesToLabel(task.start + task.duration)}</span>
              </div>
              <div class="status-pill ${stateClass}">${task.progress}%</div>
            </div>
            <div style="margin-top:10px;">
              <span class="status-pill ${stateClass}">${issue}</span>
              <span class="status-pill" style="margin-left:6px;">${task.status}</span>
            </div>
          </div>
        `;
      }).join("");
    }

    function updateStats() {
      const delays = delayTasks();
      document.getElementById("participantCount").textContent = String(people.length);
      document.getElementById("equipmentCount").textContent = "5";
      document.getElementById("delayCount").textContent = String(delays.length);
      document.getElementById("planState").textContent = planGenerated ? "План сформирован" : "Черновик";
      document.getElementById("taskCount").textContent = String(tasks.length);
      document.getElementById("avgProgress").textContent = `${avgProgress()}%`;
      document.getElementById("planMode").textContent = optimized ? "Оптимизирован" : "Базовый";
      document.getElementById("planEta").textContent = totalLabel();
      document.getElementById("etaTop").textContent = totalLabel();
      document.getElementById("hqSummary").textContent = `${people.length} участников`;
      document.getElementById("taskDelayCount").textContent = `${delays.length} ${delays.length === 1 ? "задержка" : delays.length < 5 ? "задержки" : "задержек"}`;
      document.getElementById("delayStatus").textContent = `${delays.length} ${delays.length === 1 ? "задержка" : delays.length < 5 ? "задержки" : "задержек"}`;

      if (delays.length) {
        const leadDelay = delays[0];
        document.getElementById("delayTitle").textContent = `Есть отклонения по подразделениям ${delays.map((item) => item.owner).join(", ")}`;
        document.getElementById("delayText").textContent = `${leadDelay.owner} начинает этап "${leadDelay.title}" с задержкой +${leadDelay.delay} мин. Оптимизация уменьшает критический путь и запускает часть проверок параллельно.`;
        document.getElementById("delayBanner").style.display = "flex";
      } else {
        document.getElementById("delayTitle").textContent = "План без отклонений";
        document.getElementById("delayText").textContent = "После оптимизации критические операции перекрываются, а задержки сняты.";
        document.getElementById("delayBanner").style.display = "flex";
      }
    }

    function updateAll() {
      updateStats();
      renderTaskPreview();
      renderGantt();
      renderPeople();
      renderChat();
      renderTaskStatuses();
    }

    window.addEventListener("resize", renderGantt);

    updateAll();
  
