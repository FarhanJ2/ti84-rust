// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn send_calculation(num1: &str, num2: &str) -> String {
    println!("Receieved Request!");
    let num1: f64 = num1.trim().parse().expect("Enter a number");
    let num2: f64 = num2.trim().parse().expect("Enter a number");

    let ans = num1 + num2;

    return format!("The answer is {}", ans);
}

fn main() {
    tauri::Builder::default()
    // pass commands here
    .invoke_handler(tauri::generate_handler![greet, send_calculation])
    .run(tauri::generate_context!())
    .expect("Error while running tauri application");
}
