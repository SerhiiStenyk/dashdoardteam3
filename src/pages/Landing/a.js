<form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
          <input type="text" name="name" value={name} onChange={handleChangeName} />
          </label>

          <label style={styles.label}>
            Почта
          <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label style={styles.label}>
            Пароль
          <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>