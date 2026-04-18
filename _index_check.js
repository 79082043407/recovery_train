
    const palette = {
      blue: { bg: "linear-gradient(180deg, rgba(47, 159, 255, 0.96), rgba(12, 99, 216, 0.95))", accent: "#caebff" },
      green: { bg: "linear-gradient(180deg, rgba(75, 217, 113, 0.95), rgba(39, 146, 68, 0.96))", accent: "#ddffe5" },
      amber: { bg: "linear-gradient(180deg, rgba(255, 191, 71, 0.95), rgba(203, 124, 28, 0.96))", accent: "#fff0c8" },
      orange: { bg: "linear-gradient(180deg, rgba(255, 147, 68, 0.95), rgba(205, 96, 29, 0.96))", accent: "#ffdcbf" },
      slate: { bg: "linear-gradient(180deg, rgba(131, 144, 166, 0.95), rgba(74, 84, 100, 0.96))", accent: "#f2f6ff" }
    };

    const clone = (value) => JSON.parse(JSON.stringify(value));

    const baseTasks = [
      { id: 1, title: "Сбор оперативного штаба и подтверждение границ АВР", owner: "Руководитель штаба", team: "Штаб", start: 0, duration: 10, progress: 100, color: "slate", status: "Завершено", delay: 0 },
      { id: 2, title: "Схема происшествия и исходные данные по месту схода", owner: "НВП", team: "ДАВС", start: 0, duration: 16, progress: 100, color: "blue", status: "Подтверждено", delay: 0 },
      { id: 3, title: "Отправление восстановительного поезда и подход техники", owner: "НВП", team: "ВП", start: 8, duration: 24, progress: 90, color: "amber", status: "На месте", delay: 0 },
      { id: 4, title: "Ограждение места и пожарное прикрытие", owner: "ФГП ВО ЖДТ", team: "Пожарный поезд", start: 10, duration: 22, progress: 88, color: "orange", status: "Выполняется", delay: 0 },
      { id: 5, title: "Подготовка ЕДК-1000, строповка и расстановка персонала", owner: "ВЧДЭ / крановая группа", team: "ВП", start: 28, duration: 30, progress: 70, color: "amber", status: "Развёртывание", delay: 0 },
      { id: 6, title: "Подъём и уборка сошедшего подвижного состава", owner: "НВП", team: "ВП + ВЧДЭ", start: 56, duration: 48, progress: 46, color: "green", status: "Критическая операция", delay: 0 },
      { id: 7, title: "Восстановление пути и выправка верхнего строения", owner: "ПЧ", team: "Дистанция пути", start: 100, duration: 28, progress: 24, color: "blue", status: "Ожидание окна", delay: 12 },
      { id: 8, title: "Проверка устройств СЦБ и канала связи", owner: "ШЧ / НС", team: "ШЧ + НС", start: 118, duration: 24, progress: 16, color: "slate", status: "Подготовка", delay: 8 },
      { id: 9, title: "Восстановление контактной сети", owner: "ЭЧ", team: "Электроснабжение", start: 130, duration: 18, progress: 0, color: "orange", status: "Ожидание", delay: 6 },
      { id: 10, title: "Контрольный пропуск и открытие движения", owner: "Штаб / ПЧ", team: "Штаб + ПЧ", start: 150, duration: 14, progress: 0, color: "green", status: "Ожидает", delay: 0 }
    ];

    const optimizedTasks = [
      { id: 1, title: "Сбор оперативного штаба и подтверждение границ АВР", owner: "Руководитель штаба", team: "Штаб", start: 0, duration: 8, progress: 100, color: "slate", status: "Завершено", delay: 0 },
      { id: 2, title: "Схема происшествия и исходные данные по месту схода", owner: "НВП", team: "ДАВС", start: 0, duration: 12, progress: 100, color: "blue", status: "Подтверждено", delay: 0 },
      { id: 3, title: "Отправление восстановительного поезда и подход техники", owner: "НВП", team: "ВП", start: 6, duration: 20, progress: 100, color: "amber", status: "На месте", delay: 0 },
      { id: 4, title: "Ограждение места и пожарное прикрытие", owner: "ФГП ВО ЖДТ", team: "Пожарный поезд", start: 8, duration: 18, progress: 100, color: "orange", status: "Закрыто", delay: 0 },
      { id: 5, title: "Подготовка ЕДК-1000, строповка и расстановка персонала", owner: "ВЧДЭ / крановая группа", team: "ВП", start: 22, duration: 22, progress: 88, color: "amber", status: "Ускорено", delay: 0 },
      { id: 6, title: "Подъём и уборка сошедшего подвижного состава", owner: "НВП", team: "ВП + ВЧДЭ", start: 42, duration: 38, progress: 68, color: "green", status: "Параллельное окно", delay: 0 },
      { id: 7, title: "Восстановление пути и выправка верхнего строения", owner: "ПЧ", team: "Дистанция пути", start: 76, duration: 24, progress: 42, color: "blue", status: "Начато раньше", delay: 2 },
      { id: 8, title: "Проверка устройств СЦБ и канала связи", owner: "ШЧ / НС", team: "ШЧ + НС", start: 92, duration: 18, progress: 34, color: "slate", status: "Параллельно", delay: 0 },
      { id: 9, title: "Восстановление контактной сети", owner: "ЭЧ", team: "Электроснабжение", start: 98, duration: 16, progress: 26, color: "orange", status: "Параллельно", delay: 0 },
      { id: 10, title: "Контрольный пропуск и открытие движения", owner: "Штаб / ПЧ", team: "Штаб + ПЧ", start: 120, duration: 10, progress: 0, color: "green", status: "Подготовка", delay: 0 }
    ];

    const people = [
      { name: "Неустроев", role: "Руководитель штаба", unit: "КрасЖД", status: "Координирует оперативные решения", badge: "в штабе", stateClass: "status-ok", avatar: "blue" },
      { name: "Раменский", role: "Начальник ДАВС", unit: "ДАВС", status: "Контроль сил и средств", badge: "онлайн", stateClass: "status-ok", avatar: "green" },
      { name: "НВП", role: "Начальник восстановительного поезда", unit: "ВП", status: "Ведёт подъём и уборку ПС", badge: "на месте", stateClass: "status-ok", avatar: "yellow" },
      { name: "ПЧ", role: "Дистанция пути", unit: "Путь", status: "Подготовка восстановления пути", badge: "готовность", stateClass: "status-warn", avatar: "green" },
      { name: "ШЧ", role: "СЦБ", unit: "ШЧ", status: "Ожидает допуск после уборки", badge: "окно", stateClass: "status-warn", avatar: "slate" },
      { name: "ЭЧ", role: "Электроснабжение", unit: "ЭЧ", status: "Работа по контактной сети после окна", badge: "+6 мин", stateClass: "status-bad", avatar: "yellow" },
      { name: "НС", role: "Дирекция связи", unit: "НС", status: "Поддерживает канал штаба", badge: "связь", stateClass: "status-ok", avatar: "blue" },
      { name: "ФГП ВО ЖДТ", role: "Пожарный поезд", unit: "Прикрытие", status: "Ограждение и пожарная безопасность", badge: "боеготов", stateClass: "status-ok", avatar: "green" }
    ];

    const chatSeed = [
      { author: "Руководитель штаба", text: "Подтверждаем схему происшествия. НВП, обновите по силам и средствам.", time: "12:04", outgoing: false },
      { author: "НВП", text: "Восстановительный поезд на подходе. ЕДК-1000 и крановая группа готовят строповку по нормативной схеме.", time: "12:09", outgoing: false },
      { author: "ПЧ", text: "Звено пути готово, ждём освобождение зоны после подъёма и уборки ПС.", time: "12:17", outgoing: false },
      { author: "ШЧ / НС", text: "Связь со штабом стабильная, проверку СЦБ начнём сразу после допуска.", time: "12:23", outgoing: false },
      { author: "Штаб", text: "Принято. На вкладке плана доступен zoom Ганта, держим оптимизированный сценарий как резерв.", time: "12:28", outgoing: true }
    ];

    let tasks = clone(baseTasks);
    let messages = clone(chatSeed);
    let optimized = false;
    let planGenerated = false;
    let minuteWidth = 7;
    let pulseEnabled = true;
    let resourcesMode = false;
    let simRunning = false;
    let simTimer = null;

    const screens = [...document.querySelectorAll(".screen")];
    const navButtons = [...document.querySelectorAll(".nav-btn")];
    const layerButtons = [...document.querySelectorAll("[data-layer]")];
    const tasksPreview = document.getElementById("tasksPreview");
    const gantt = document.getElementById("gantt");
    const peopleList = document.getElementById("peopleList");
    const chatList = document.getElementById("chatList");
    const taskStatusList = document.getElementById("taskStatusList");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const resourceLabels = document.getElementById("resourceLabels");
    const trainLeft = document.getElementById("trainLeft");
    const trainRight = document.getElementById("trainRight");
    const containers = document.getElementById("containers");
    const hazardPulse = document.getElementById("hazardPulse");
    const mapSummary = document.getElementById("mapSummary");
    const criticalSummary = document.getElementById("criticalSummary");

    document.documentElement.style.setProperty("--minute-width", `${minuteWidth}px`);

    navButtons.forEach((button) => {
      button.addEventListener("click", () => setScreen(button.dataset.screen));
    });

    layerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        layerButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
        resourcesMode = button.dataset.layer === "resources";
        updateMapMode();
      });
    });

    document.getElementById("generatePlanBtn").addEventListener("click", () => {
      planGenerated = true;
      optimized = false;
      tasks = clone(baseTasks);
      updateAll();
      setScreen("plan");
    });

    document.getElementById("optimizePlanBtn").addEventListener("click", () => {
      optimized = !optimized;
      tasks = clone(optimized ? optimizedTasks : baseTasks);
      updateAll();
    });

    document.getElementById("zoomInBtn").addEventListener("click", () => setZoom(minuteWidth + 1.5));
    document.getElementById("zoomOutBtn").addEventListener("click", () => setZoom(minuteWidth - 1.5));
    document.getElementById("fitBtn").addEventListener("click", fitZoom);
    document.getElementById("pulseToggle").addEventListener("click", () => {
      pulseEnabled = !pulseEnabled;
      updatePulse();
    });
    document.getElementById("simulateBtn").addEventListener("click", toggleSimulation);

    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = chatInput.value.trim();
      if (!value) return;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      messages.push({ author: "Штаб", text: value, time: `${hh}:${mm}`, outgoing: true });
      chatInput.value = "";
      renderChat();
    });

    function setScreen(name) {
      screens.forEach((screen) => screen.classList.toggle("active", screen.id === `screen-${name}`));
      navButtons.forEach((button) => button.classList.toggle("active", button.dataset.screen === name));
    }

    function setZoom(value) {
      minuteWidth = Math.max(5.5, Math.min(12, value));
      document.documentElement.style.setProperty("--minute-width", `${minuteWidth}px`);
      renderGantt();
      updateZoomLabel();
    }

    function fitZoom() {
      const wrap = document.querySelector(".gantt-wrap");
      if (!wrap) return;
      const total = Math.max(170, totalDuration() + 20);
      const desired = Math.max(5.5, Math.min(12, (wrap.clientWidth - 260) / total));
      setZoom(desired);
    }

    function updateZoomLabel() {
      const percent = Math.round((minuteWidth / 7) * 100);
      document.getElementById("zoomLabel").textContent = `Масштаб: ${percent}%`;
    }

    function toggleSimulation() {
      simRunning = !simRunning;
      document.getElementById("simulateBtn").textContent = simRunning ? "⏸" : "▶";

      if (!simRunning) {
        clearInterval(simTimer);
        simTimer = null;
        trainLeft.style.transform = "";
        trainRight.style.transform = "";
        containers.style.transform = "";
        return;
      }

      let step = 0;
      simTimer = setInterval(() => {
        step += 1;
        const swing = Math.sin(step / 4) * 6;
        trainLeft.style.transform = `translateX(${Math.max(0, 20 - step)}px)`;
        trainRight.style.transform = `translateX(${Math.min(0, -20 + step)}px)`;
        containers.style.transform = `translateY(${Math.sin(step / 3) * 2}px) rotate(${swing * 0.2}deg)`;
        if (step > 20) {
          clearInterval(simTimer);
          simTimer = null;
          simRunning = false;
          document.getElementById("simulateBtn").textContent = "▶";
        }
      }, 140);
    }

    function updatePulse() {
      hazardPulse.style.display = pulseEnabled ? "block" : "none";
    }

    function updateMapMode() {
      resourceLabels.style.opacity = resourcesMode ? "1" : "0";
      mapSummary.textContent = resourcesMode
        ? "Показаны силы и средства: кран, резерв ДАВС, пожарный поезд и опорные объекты для развёртывания АВР."
        : "Схема аварии в виде сверху: пути, сход ПС, техника, критическая зона и база ДАВС в одном поле.";
      criticalSummary.textContent = resourcesMode
        ? "Основной резерв сосредоточен на базе ДАВС. После подъёма ПС критический путь переходит на ПЧ, ШЧ и ЭЧ."
        : "Подъём и уборка ПС остаются главной критической операцией. После завершения открываются параллельные окна для ПЧ, ШЧ и ЭЧ.";
    }

    function minutesToLabel(minutes) {
      const base = 12 * 60;
      const total = base + minutes;
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

    function renderPreview() {
      tasksPreview.innerHTML = tasks.slice(0, 5).map((task) => {
        const colors = palette[task.color];
        return `
          <div class="preview-task">
            <div class="preview-task-head">
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
      const total = Math.max(170, totalDuration() + 20);
      gantt.style.setProperty("--timeline-total", total);

      const ticks = [];
      for (let i = 0; i <= total; i += 20) ticks.push(i);
      const currentMinute = optimized ? 94 : 118;
      const lineMarkup = `<div class="current-line" style="left:calc(var(--minute-width) * ${currentMinute});"></div>`;
      const tickMarkup = ticks.map((value) => `<span class="time-tick" style="left:calc(var(--minute-width) * ${value});">${minutesToLabel(value)}</span>`).join("");

      const rows = tasks.map((task) => {
        const colors = palette[task.color];
        const visualWidth = Math.max(task.duration * minuteWidth, 260);
        const left = task.start * minuteWidth;
        return `
          <div class="gantt-row">
            <div class="gantt-label">
              <strong>${task.title}</strong>
              <span>${task.owner}<br>${task.team}</span>
            </div>
            <div class="timeline-row">
              ${lineMarkup}
              <div class="task-bar" style="left:${left}px; width:${visualWidth}px; background:${colors.bg};">
                ${task.delay ? `<div class="task-delay-badge">+${task.delay} мин</div>` : ""}
                <div class="task-bar-content">
                  <div class="task-bar-title">${task.title}</div>
                  <div class="task-bar-meta">${task.owner} • ${task.team}</div>
                  <div class="task-bar-window">${minutesToLabel(task.start)}–${minutesToLabel(task.start + task.duration)} • ${task.status}</div>
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
            ${lineMarkup}
            ${tickMarkup}
          </div>
        </div>
        ${rows}
      `;

      document.getElementById("timelineHint").textContent = `Текущее время: ${minutesToLabel(currentMinute)}`;
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

    function renderStatuses() {
      taskStatusList.innerHTML = tasks.map((task) => {
        const stateClass = task.delay ? "status-bad" : task.progress >= 70 ? "status-ok" : "status-warn";
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
      document.getElementById("forcesValue").textContent = String(people.length);
      document.getElementById("equipmentValue").textContent = "5";
      document.getElementById("taskCount").textContent = String(tasks.length);
      document.getElementById("avgProgress").textContent = `${avgProgress()}%`;
      document.getElementById("planMode").textContent = optimized ? "Оптимизирован" : "Базовый";
      document.getElementById("planEta").textContent = totalLabel();
      document.getElementById("etaTop").textContent = totalLabel();
      document.getElementById("etaSide").textContent = totalLabel();
      document.getElementById("hqSummary").textContent = `${people.length} участников`;
      document.getElementById("planState").textContent = planGenerated ? "План сформирован" : "Черновик";
      document.getElementById("taskDelayCount").textContent = `${delays.length} ${delays.length === 1 ? "задержка" : delays.length < 5 ? "задержки" : "задержек"}`;
      document.getElementById("delayStatus").textContent = `${delays.length} ${delays.length === 1 ? "задержка" : delays.length < 5 ? "задержки" : "задержек"}`;

      const progress = Math.max(24, Math.min(92, avgProgress()));
      document.getElementById("mapProgressFill").style.width = `${progress}%`;

      if (delays.length) {
        const lead = delays[0];
        document.getElementById("delayTitle").textContent = `Есть отклонения по подразделениям ${delays.map((t) => t.owner).join(", ")}`;
        document.getElementById("delayText").textContent = `${lead.owner} начинает этап "${lead.title}" с задержкой +${lead.delay} мин. Оптимизация сокращает критический путь и запускает ПЧ, ШЧ и ЭЧ ближе друг к другу.`;
      } else {
        document.getElementById("delayTitle").textContent = "План без отклонений";
        document.getElementById("delayText").textContent = "Критический путь укорочен, зависимые подразделения запускаются без ожидания дополнительного окна.";
      }
    }

    function updateAll() {
      updateStats();
      renderPreview();
      renderGantt();
      renderPeople();
      renderChat();
      renderStatuses();
      updateMapMode();
      updatePulse();
      updateZoomLabel();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) fitZoom();
      else renderGantt();
    });

    updateAll();
    if (window.innerWidth > 900) fitZoom();
  
