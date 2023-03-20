import { Props, Icons } from "./types";

const Icon = ({ current }: Props): JSX.Element => {
    const icons: Icons = {
        addFriend: <svg height="512px" viewBox="0 -24 512 511" width="512px" role="icon">
            <path d="m400.601562 241.5c-61.425781 0-111.398437 49.972656-111.398437 111.398438 0 61.425781 49.972656 111.402343 111.398437 111.402343 61.425782 0 111.398438-49.972656 111.398438-111.402343 0-61.425782-49.976562-111.398438-111.398438-111.398438zm32.132813 126.398438h-17.132813v17.132812c0 8.285156-6.714843 15-15 15-8.285156 0-15-6.714844-15-15v-17.132812h-17.132812c-8.285156 0-15-6.714844-15-15 0-8.28125 6.714844-15 15-15h17.132812v-17.132813c0-8.28125 6.714844-15 15-15 8.285157 0 15 6.71875 15 15v17.132813h17.132813c8.285156 0 15 6.71875 15 15 0 8.285156-6.714844 15-15 15zm0 0" fill="#FFFFFF"/>
            <path d="m159.601562 223.300781c61.425782 0 111.398438-49.976562 111.398438-111.402343 0-61.425782-49.976562-111.398438-111.398438-111.398438-61.425781 0-111.402343 49.972656-111.402343 111.398438 0 61.429687 49.976562 111.402343 111.402343 111.402343zm0 0" fill="#FFFFFF"/>
            <path d="m291.453125 263.101562c-11.269531-16.496093-25.546875-30.792968-42.042969-42.066406-24.4375 20.148438-55.734375 32.265625-89.808594 32.265625-34.074218 0-65.371093-12.117187-89.8125-32.265625-42.097656 28.765625-69.789062 77.140625-69.789062 131.863282v56.234374c0 30.421876 24.746094 55.167969 55.164062 55.167969h208.867188c13.421875 0 25.734375-4.820312 35.308594-12.816406-24.820313-25.492187-40.140625-60.28125-40.140625-98.585937 0-34.066407 12.113281-65.359376 32.253906-89.796876zm0 0" fill="#FFFFFF"/>
        </svg>,
        block: <svg viewBox="0 0 448 448" width="512px" height="512px" role="icon">
            <path d="M224,0C100.288,0,0,100.288,0,224s100.288,224,224,224s224-100.288,224-224S347.712,0,224,0z M135.921,90.479    C162.056,73.223,192.682,64.016,224,64c31.363-0.033,62.035,9.208,88.16,26.56l-221.6,221.6    C41.871,238.418,62.179,139.169,135.921,90.479z M312.079,357.521C285.944,374.777,255.319,383.984,224,384    c-31.363,0.033-62.035-9.208-88.16-26.56l221.6-221.6C406.129,209.581,385.821,308.831,312.079,357.521z" fill="#FFFFFF"/>
        </svg>,
        chat: <svg width="512px" height="512px" viewBox="0 0 30.743 30.744" role="icon">
            <path d="M28.585,9.67h-0.842v9.255c0,1.441-0.839,2.744-2.521,2.744H8.743v0.44c0,1.274,1.449,2.56,2.937,2.56h12.599l4.82,2.834   L28.4,24.669h0.185c1.487,0,2.158-1.283,2.158-2.56V11.867C30.743,10.593,30.072,9.67,28.585,9.67z" fill="#FFFFFF"/>
            <path d="M22.762,3.24H3.622C1.938,3.24,0,4.736,0,6.178v11.6c0,1.328,1.642,2.287,3.217,2.435l-1.025,3.891L8.76,20.24h14.002   c1.684,0,3.238-1.021,3.238-2.462V8.393V6.178C26,4.736,24.445,3.24,22.762,3.24z M6.542,13.032c-0.955,0-1.729-0.774-1.729-1.729   s0.774-1.729,1.729-1.729c0.954,0,1.729,0.774,1.729,1.729S7.496,13.032,6.542,13.032z M13,13.032   c-0.955,0-1.729-0.774-1.729-1.729S12.045,9.574,13,9.574s1.729,0.774,1.729,1.729S13.955,13.032,13,13.032z M19.459,13.032   c-0.955,0-1.73-0.774-1.73-1.729s0.775-1.729,1.73-1.729c0.953,0,1.729,0.774,1.729,1.729S20.412,13.032,19.459,13.032z" fill="#FFFFFF"/>
        </svg>,
        chevronUp: <svg width="512px" height="512px" viewBox="0 0 438.533 438.533" role="icon">
            <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0   c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267   c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407   s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062   C438.533,179.485,428.732,142.795,409.133,109.203z M361.74,259.517l-29.123,29.129c-3.621,3.614-7.901,5.424-12.847,5.424   c-4.948,0-9.236-1.81-12.847-5.424l-87.654-87.653l-87.646,87.653c-3.616,3.614-7.898,5.424-12.847,5.424   c-4.95,0-9.233-1.81-12.85-5.424l-29.12-29.129c-3.617-3.607-5.426-7.898-5.426-12.847c0-4.942,1.809-9.227,5.426-12.848   l129.62-129.616c3.617-3.617,7.898-5.424,12.847-5.424s9.238,1.807,12.846,5.424L361.74,233.822   c3.613,3.621,5.424,7.905,5.424,12.848C367.164,251.618,365.357,255.909,361.74,259.517z" fill="#FFFFFF"/>
        </svg>,
        close: <svg width="512px" height="512px" viewBox="0 0 93.934 93.934" role="icon">
            <path d="M80.178,13.757c-18.341-18.342-48.08-18.342-66.421,0c-18.342,18.341-18.342,48.08,0,66.421   c18.341,18.342,48.08,18.342,66.421,0C98.52,61.836,98.52,32.098,80.178,13.757z M71.576,61.737l-9.838,9.838l-14.771-14.77   l-14.771,14.77l-9.838-9.838l14.77-14.771l-14.77-14.771l9.838-9.838l14.771,14.771l14.771-14.771l9.838,9.838l-14.77,14.772   L71.576,61.737z" fill="#FFFFFF"/>
        </svg>,
        doubleArrow: <svg width="512px" height="512px" viewBox="0 0 611.996 611.996" role="icon">
            <path d="M565.771,45.618L382.29,177.44V75.86c-0.02-44.552-24.684-41.801-46.215-30.242L11.219,279.001     c-14.959,15.227-14.959,39.91,0,55.137l324.856,233.363c19.735,12.781,46.195,6.534,46.215-31.427V435.698l183.481,131.822     c19.735,12.781,45.603,7.126,46.214-32.039V77.064C612.578,33.716,587.303,34.06,565.771,45.618z" fill="#E7E7E7"/>
        </svg>,
        favorites: <svg viewBox="0 0 50 50" width="50px" height="50px" role="icon">
            <path d="M 24.908203 1.2167969 C 24.479203 1.2187969 24.099844 1.4943438 23.964844 1.9023438 L 18.277344 19.019531 L 1.0429688 19.005859 C 0.60796875 19.005859 0.22184375 19.287172 0.08984375 19.701172 C -0.04315625 20.116172 0.10889063 20.568312 0.46289062 20.820312 L 14.761719 30.978516 L 9.2050781 47.464844 C 9.0660781 47.875844 9.2095937 48.328891 9.5585938 48.587891 C 9.7345938 48.718891 9.9452969 48.783203 10.154297 48.783203 C 10.358297 48.783203 10.561328 48.719703 10.736328 48.595703 L 24.912109 38.455078 L 38.998047 48.59375 C 39.347047 48.84675 39.818969 48.84575 40.167969 48.59375 C 40.517969 48.34075 40.664156 47.893422 40.535156 47.482422 L 35.335938 30.984375 L 49.603516 20.792969 C 49.955516 20.539969 50.104656 20.087828 49.972656 19.673828 C 49.839656 19.259828 49.455484 18.980469 49.021484 18.980469 L 31.746094 18.982422 L 25.859375 1.8925781 C 25.720375 1.4885781 25.340062 1.2167969 24.914062 1.2167969 L 24.908203 1.2167969 z M 28.8125 4.3222656 L 29.566406 6.515625 C 35.553406 7.850625 40.591172 11.734469 43.451172 16.980469 L 45.699219 16.980469 C 42.501219 10.400469 36.2575 5.5702656 28.8125 4.3222656 z M 21.044922 4.3476562 C 13.652922 5.6336562 7.4581563 10.457766 4.2851562 17.009766 L 6.5332031 17.011719 C 9.3712031 11.785719 14.368453 7.908875 20.314453 6.546875 L 21.044922 4.3476562 z M 2.1425781 24.466797 C 2.0515781 25.299797 2 26.144 2 27 C 2 33.253 4.5112187 38.926172 8.5742188 43.076172 L 9.3066406 40.904297 C 6.0166406 37.196297 4 32.335 4 27 C 4 26.605 4.0375937 26.218125 4.0585938 25.828125 L 2.1425781 24.466797 z M 47.861328 24.494141 L 45.943359 25.865234 C 45.963359 26.243234 46 26.617 46 27 C 46 32.389 43.94175 37.293625 40.59375 41.015625 L 41.289062 43.222656 C 45.434062 39.060656 48 33.324 48 27 C 48 26.153 47.951328 25.318141 47.861328 24.494141 z M 17.154297 46.464844 L 15.251953 47.826172 C 18.214953 49.218172 21.516 50 25 50 C 28.425 50 31.675609 49.241578 34.599609 47.892578 L 32.691406 46.521484 C 30.305406 47.464484 27.717 48 25 48 C 22.226 48 19.581297 47.445844 17.154297 46.464844 z" fill="white"/>
        </svg>,
        filter: <svg viewBox="0 0 57 57" width="512px" height="512px" role="icon">
            <path d="M55.732,55.309l-5.969-6.244c1.746-1.918,2.82-4.458,2.82-7.25c0-5.953-4.843-10.796-10.796-10.796   s-10.796,4.843-10.796,10.796S35.834,52.61,41.787,52.61c2.441,0,4.688-0.824,6.499-2.196l6.001,6.277   C54.483,56.896,54.746,57,55.009,57c0.249,0,0.497-0.092,0.691-0.277C56.099,56.341,56.114,55.708,55.732,55.309z M32.991,41.814   c0-4.85,3.946-8.796,8.796-8.796s8.796,3.946,8.796,8.796s-3.946,8.796-8.796,8.796S32.991,46.664,32.991,41.814z" fill="#FFFFFF"/>
            <path d="M27.991,12c-0.553,0-1,0.447-1,1s0.447,1,1,1h18c0.553,0,1-0.447,1-1s-0.447-1-1-1H27.991z" fill="#FFFFFF"/>
            <path d="M46.991,27c0-0.553-0.447-1-1-1h-18c-0.553,0-1,0.447-1,1s0.447,1,1,1h18C46.544,28,46.991,27.553,46.991,27z" fill="#FFFFFF"/>
            <path d="M21.57,7.241c-0.417-0.359-1.051-0.312-1.409,0.108l-6.248,7.288l-3.822-2.866c-0.44-0.33-1.067-0.243-1.399,0.2   c-0.332,0.441-0.242,1.068,0.2,1.399l4.571,3.429c0.179,0.135,0.39,0.2,0.599,0.2c0.283,0,0.563-0.119,0.76-0.35l6.857-8   C22.039,8.231,21.99,7.601,21.57,7.241z" fill="#FFFFFF"/>
            <path d="M21.57,21.241c-0.417-0.359-1.051-0.312-1.409,0.108l-6.248,7.288l-3.822-2.866c-0.44-0.33-1.067-0.243-1.399,0.2   c-0.332,0.441-0.242,1.068,0.2,1.399l4.571,3.429c0.179,0.135,0.39,0.2,0.599,0.2c0.283,0,0.563-0.119,0.76-0.35l6.857-8   C22.039,22.231,21.99,21.601,21.57,21.241z" fill="#FFFFFF"/>
            <path d="M20.161,36.35l-6.248,7.287l-3.822-2.866c-0.44-0.331-1.067-0.243-1.399,0.2c-0.332,0.441-0.242,1.068,0.2,1.399   l4.571,3.429c0.179,0.135,0.39,0.2,0.599,0.2c0.283,0,0.563-0.119,0.76-0.35l6.857-7.999c0.36-0.419,0.312-1.05-0.108-1.409   C21.153,35.882,20.519,35.93,20.161,36.35z" fill="#FFFFFF"/>
            <path d="M26.991,52H13.167C7.555,52,2.991,47.436,2.991,41.824V12.176C2.991,6.564,7.555,2,13.167,2h29.648   c5.611,0,10.176,4.564,10.176,10.176V33c0,0.553,0.447,1,1,1s1-0.447,1-1V12.176C54.991,5.462,49.529,0,42.815,0H13.167   C6.453,0,0.991,5.462,0.991,12.176v29.648C0.991,48.538,6.453,54,13.167,54h13.824c0.553,0,1-0.447,1-1S27.544,52,26.991,52z" fill="#FFFFFF"/>
        </svg>,
        forum: <svg viewBox="0 0 504.124 504.124" width="512px" height="512px" role="icon">
            <path fill="#EFEFEF" d="M23.631,0h456.862c12.997,0,23.631,10.634,23.631,23.631v456.862  c0,12.997-10.634,23.631-23.631,23.631H23.631C10.634,504.123,0,493.489,0,480.492V23.631C0,10.634,10.634,0,23.631,0z"/>
            <path fill="#2B414D" d="M47.262,94.523h409.6c8.665,0,15.754,7.089,15.754,15.754v346.585  c0,8.665-7.089,15.754-15.754,15.754h-409.6c-8.665,0-15.754-7.089-15.754-15.754V110.277  C31.508,101.612,38.597,94.523,47.262,94.523z"/>
            <path fill="#E4E7E7" d="M110.277,165.415h228.431c4.332,0,7.877,3.545,7.877,7.877v7.877c0,4.332-3.545,7.877-7.877,7.877  H110.277c-4.332,0-7.877-3.545-7.877-7.877v-7.877C102.4,168.96,105.945,165.415,110.277,165.415z"/>
            <path fill="#E35E53" d="M204.8,220.554h-94.523c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877  H204.8c4.332,0,7.877-3.545,7.877-7.877v-7.877C212.677,224.098,209.132,220.554,204.8,220.554z M181.169,330.831h-70.892  c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877h70.892c4.332,0,7.877-3.545,7.877-7.877v-7.877  C189.046,334.375,185.502,330.831,181.169,330.831z M393.846,330.831h-47.262c-4.332,0-7.877,3.545-7.877,7.877v7.877  c0,4.332,3.545,7.877,7.877,7.877h47.262c4.332,0,7.877-3.545,7.877-7.877v-7.877C401.723,334.375,398.178,330.831,393.846,330.831z  "/>
            <path fill="#26A6D1" d="M393.846,220.554H252.062c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877  h141.785c4.332,0,7.877-3.545,7.877-7.877v-7.877C401.723,224.098,398.178,220.554,393.846,220.554z M393.846,385.969H110.277  c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877h283.569c4.332,0,7.877-3.545,7.877-7.877v-7.877  C401.723,389.514,398.178,385.969,393.846,385.969z"/>
            <path fill="#49B8A4" d="M299.323,275.692H110.277c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877  h189.046c4.332,0,7.877-3.545,7.877-7.877v-7.877C307.2,279.237,303.655,275.692,299.323,275.692z M299.323,330.831h-70.892  c-4.332,0-7.877,3.545-7.877,7.877v7.877c0,4.332,3.545,7.877,7.877,7.877h70.892c4.332,0,7.877-3.545,7.877-7.877v-7.877  C307.2,334.375,303.655,330.831,299.323,330.831z"/>
            <path fill="#BFC3C5" d="M47.262,31.508c-8.665,0-15.754,7.089-15.754,15.754s7.089,15.754,15.754,15.754  s15.754-7.089,15.754-15.754S55.926,31.508,47.262,31.508z M94.523,31.508c-8.665,0-15.754,7.089-15.754,15.754  s7.089,15.754,15.754,15.754s15.754-7.089,15.754-15.754S103.188,31.508,94.523,31.508z M141.785,31.508  c-8.665,0-15.754,7.089-15.754,15.754s7.089,15.754,15.754,15.754s15.754-7.089,15.754-15.754S150.449,31.508,141.785,31.508z"/>
        </svg>,
        friends: <svg viewBox="0 0 60 60" width="512px" height="512px" role="icon">
            <path d="M55.014,45.389l-9.553-4.776C44.56,40.162,44,39.256,44,38.248v-3.381c0.229-0.28,0.47-0.599,0.719-0.951  c1.239-1.75,2.232-3.698,2.954-5.799C49.084,27.47,50,26.075,50,24.5v-4c0-0.963-0.36-1.896-1-2.625v-5.319  c0.056-0.55,0.276-3.824-2.092-6.525C44.854,3.688,41.521,2.5,37,2.5s-7.854,1.188-9.908,3.53c-1.435,1.637-1.918,3.481-2.064,4.805  C23.314,9.949,21.294,9.5,19,9.5c-10.389,0-10.994,8.855-11,9v4.579c-0.648,0.706-1,1.521-1,2.33v3.454  c0,1.079,0.483,2.085,1.311,2.765c0.825,3.11,2.854,5.46,3.644,6.285v2.743c0,0.787-0.428,1.509-1.171,1.915l-6.653,4.173  C1.583,48.134,0,50.801,0,53.703V57.5h14h2h44v-4.043C60,50.019,58.089,46.927,55.014,45.389z M14,53.262V55.5H2v-1.797  c0-2.17,1.184-4.164,3.141-5.233l6.652-4.173c1.333-0.727,2.161-2.121,2.161-3.641v-3.591l-0.318-0.297  c-0.026-0.024-2.683-2.534-3.468-5.955l-0.091-0.396l-0.342-0.22C9.275,29.899,9,29.4,9,28.863v-3.454  c0-0.36,0.245-0.788,0.671-1.174L10,23.938l-0.002-5.38C10.016,18.271,10.537,11.5,19,11.5c2.393,0,4.408,0.553,6,1.644v4.731  c-0.64,0.729-1,1.662-1,2.625v4c0,0.304,0.035,0.603,0.101,0.893c0.027,0.116,0.081,0.222,0.118,0.334  c0.055,0.168,0.099,0.341,0.176,0.5c0.001,0.002,0.002,0.003,0.003,0.005c0.256,0.528,0.629,1,1.099,1.377  c0.005,0.019,0.011,0.036,0.016,0.054c0.06,0.229,0.123,0.457,0.191,0.68l0.081,0.261c0.014,0.046,0.031,0.093,0.046,0.139  c0.035,0.108,0.069,0.215,0.105,0.321c0.06,0.175,0.123,0.356,0.196,0.553c0.031,0.082,0.065,0.156,0.097,0.237  c0.082,0.209,0.164,0.411,0.25,0.611c0.021,0.048,0.039,0.1,0.06,0.147l0.056,0.126c0.026,0.058,0.053,0.11,0.079,0.167  c0.098,0.214,0.194,0.421,0.294,0.621c0.016,0.032,0.031,0.067,0.047,0.099c0.063,0.125,0.126,0.243,0.189,0.363  c0.108,0.206,0.214,0.4,0.32,0.588c0.052,0.092,0.103,0.182,0.154,0.269c0.144,0.246,0.281,0.472,0.414,0.682  c0.029,0.045,0.057,0.092,0.085,0.135c0.242,0.375,0.452,0.679,0.626,0.916c0.046,0.063,0.086,0.117,0.125,0.17  c0.022,0.029,0.052,0.071,0.071,0.097v3.309c0,0.968-0.528,1.856-1.377,2.32l-2.646,1.443l-0.461-0.041l-0.188,0.395l-5.626,3.069  C15.801,46.924,14,49.958,14,53.262z M58,55.5H16v-2.238c0-2.571,1.402-4.934,3.659-6.164l8.921-4.866  C30.073,41.417,31,39.854,31,38.155v-4.018v-0.001l-0.194-0.232l-0.038-0.045c-0.002-0.003-0.064-0.078-0.165-0.21  c-0.006-0.008-0.012-0.016-0.019-0.024c-0.053-0.069-0.115-0.152-0.186-0.251c-0.001-0.002-0.002-0.003-0.003-0.005  c-0.149-0.207-0.336-0.476-0.544-0.8c-0.005-0.007-0.009-0.015-0.014-0.022c-0.098-0.153-0.202-0.32-0.308-0.497  c-0.008-0.013-0.016-0.026-0.024-0.04c-0.226-0.379-0.466-0.808-0.705-1.283c0,0-0.001-0.001-0.001-0.002  c-0.127-0.255-0.254-0.523-0.378-0.802l0,0c-0.017-0.039-0.035-0.077-0.052-0.116h0c-0.055-0.125-0.11-0.256-0.166-0.391  c-0.02-0.049-0.04-0.1-0.06-0.15c-0.052-0.131-0.105-0.263-0.161-0.414c-0.102-0.272-0.198-0.556-0.29-0.849l-0.055-0.178  c-0.006-0.02-0.013-0.04-0.019-0.061c-0.094-0.316-0.184-0.639-0.26-0.971l-0.091-0.396l-0.341-0.22  C26.346,25.803,26,25.176,26,24.5v-4c0-0.561,0.238-1.084,0.67-1.475L27,18.728V12.5v-0.354l-0.027-0.021  c-0.034-0.722,0.009-2.935,1.623-4.776C30.253,5.458,33.081,4.5,37,4.5c3.905,0,6.727,0.951,8.386,2.828  c1.947,2.201,1.625,5.017,1.623,5.041L47,18.728l0.33,0.298C47.762,19.416,48,19.939,48,20.5v4c0,0.873-0.572,1.637-1.422,1.899  l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713c-0.297,0.421-0.586,0.794-0.837,1.079L42,34.123v4.125  c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776C56.513,48.374,58,50.78,58,53.457V55.5z" fill="#FFFFFF"/>
        </svg>,
        games: <svg viewBox="0 0 504.079 504.079" role="icon">
            <path fill="#324D5B" d="M502.519,328.249c-11.815-91.372-61.046-191.015-63.015-195.348
            c-0.788-1.575-2.363-3.151-3.938-3.938l-7.483-3.151l-2.363-8.665c0-0.788-0.394-1.182-0.788-1.969
            c-0.394-0.788-5.514-10.634-19.692-16.148c-12.997-5.12-45.686-16.542-65.378-16.542c-6.695,0-12.209,1.182-15.754,3.938
            c-2.757,1.182-14.572,11.815-25.994,11.815h-94.523c-11.028,0-23.237-10.24-25.994-11.815c-3.938-2.757-9.058-3.938-15.754-3.938
            c-19.692,0-52.382,11.422-65.378,16.542c-14.178,5.514-19.298,15.36-19.692,16.148c-0.394,0.394-0.394,1.182-0.788,1.969
            l-2.363,9.058l-5.514,3.151c-1.575,0.788-2.757,1.969-3.545,3.545c-1.969,4.332-51.2,103.975-63.015,195.348
            c-4.332,34.265,0.394,59.471,14.572,75.618c13.785,15.36,31.902,17.723,39.385,17.723h5.908c10.24,0,24.812-7.877,72.862-59.471
            c4.726-5.12,8.271-7.877,10.634-10.24c7.089-7.089,21.662-9.452,32.295-9.452h150.449c10.634,0,25.6,2.363,32.295,9.452
            c2.363,2.363,5.908,5.12,10.634,10.24c48.049,51.594,62.622,59.471,72.862,59.471h5.908c7.089,0,25.6-1.969,39.385-17.723
            C502.125,387.72,506.851,362.12,502.519,328.249z"/>
            <path fill="#1D323D" d="M439.504,132.902c-0.788-1.575-2.363-3.151-3.938-3.938l-7.483-3.151l-2.363-8.665
            c0-0.788-0.394-1.182-0.788-1.969c-0.394-0.788-5.514-10.634-19.692-16.148c-12.997-5.12-45.686-16.542-65.378-16.542
            c-6.695,0-12.209,1.182-15.754,3.938c-2.757,1.182-14.572,11.815-25.994,11.815h-94.523c-11.028,0-23.237-10.24-25.994-11.815
            c-3.938-2.757-9.058-3.938-15.754-3.938c-19.692,0-52.382,11.422-65.378,16.542c-14.178,5.514-19.298,15.36-19.692,16.148
            c-0.394,0.394-0.394,1.182-0.788,1.969l-2.363,9.058l-5.514,3.151c-1.575,0.788-2.757,1.969-3.545,3.545
            c-0.394,1.182-4.726,9.058-10.24,22.055l36.628-18.511c51.988-24.812,70.498-10.634,72.074-9.452
            c1.182,1.575,8.271,11.028,25.206,27.569c16.148,16.148,23.631,18.511,26.782,18.511h69.317c3.545,0,11.028-2.757,26.388-18.511
            c16.542-16.542,23.631-25.6,24.812-27.569c1.969-1.575,21.268-16.148,76.012,11.422c-0.788-0.788,23.237,11.422,39.385,19.692
            C444.624,143.536,440.291,134.083,439.504,132.902z"/>
            <path fill="#597583" d="M372.156,216.397c-7.483,0-13.785,6.302-13.785,13.785s6.302,13.785,13.785,13.785
            s13.785-6.302,13.785-13.785S379.639,216.397,372.156,216.397z M403.664,184.889c-7.483,0-13.785,6.302-13.785,13.785
            s6.302,13.785,13.785,13.785s13.785-6.302,13.785-13.785S411.147,184.889,403.664,184.889z M340.648,184.889
            c-7.483,0-13.785,6.302-13.785,13.785s6.302,13.785,13.785,13.785s13.785-6.302,13.785-13.785S348.131,184.889,340.648,184.889z
            M372.156,153.382c-7.483,0-13.785,6.302-13.785,13.785s6.302,13.785,13.785,13.785s13.785-6.302,13.785-13.785
            C385.94,159.683,379.639,153.382,372.156,153.382z"/>
            <path fill="#B8C4CB" d="M252.033,121.874c8.665,0,15.754,7.089,15.754,15.754c0,8.665-7.089,15.754-15.754,15.754
            c-8.665,0-15.754-7.089-15.754-15.754C236.279,128.963,243.368,121.874,252.033,121.874z"/>
            <path fill="#4F6B79" d="M222.888,279.412H208.71v14.572c0,3.151-2.363,5.514-5.514,5.514h-12.603
            c-3.151,0-5.514-2.363-5.514-5.514v-14.572h-14.178c-3.151,0-5.514-2.363-5.514-5.514v-12.603c0-3.151,2.363-5.514,5.514-5.514
            h14.178v-14.178c0-3.151,2.363-5.514,5.514-5.514h12.603c3.151,0,5.514,2.363,5.514,5.514v14.178h14.178
            c3.151,0,5.514,2.363,5.514,5.514v12.603C228.402,277.049,226.039,279.412,222.888,279.412z"/>
            <path fill="#2D4552" d="M299.294,228.212c21.662,0,39.385,17.723,39.385,39.385c0,21.662-17.723,39.385-39.385,39.385
            c-21.662,0-39.385-17.723-39.385-39.385C259.91,245.936,277.633,228.212,299.294,228.212z"/>
            <path fill="#4F6B79" d="M299.294,240.028c15.36,0,27.569,12.209,27.569,27.569s-12.209,27.569-27.569,27.569
            c-15.36,0-27.569-12.209-27.569-27.569C271.725,252.631,283.934,240.028,299.294,240.028z"/>
            <path fill="#2D4552" d="M126.002,157.32c21.662,0,39.385,17.723,39.385,39.385s-17.723,39.385-39.385,39.385
            s-39.385-17.723-39.385-39.385S104.34,157.32,126.002,157.32z"/>
            <path fill="#4F6B79" d="M126.002,169.136c15.36,0,27.569,12.209,27.569,27.569s-12.209,27.569-27.569,27.569
            s-27.569-12.209-27.569-27.569C98.433,181.739,110.642,169.136,126.002,169.136z"/>
            <path fill="#3F5966" d="M299.294,251.843c8.665,0,15.754,7.089,15.754,15.754s-7.089,15.754-15.754,15.754
            s-15.754-7.089-15.754-15.754S290.63,251.843,299.294,251.843z M126.002,180.951c8.665,0,15.754,7.089,15.754,15.754
            s-7.089,15.754-15.754,15.754s-15.754-7.089-15.754-15.754C110.248,188.04,117.337,180.951,126.002,180.951z"/>
        </svg>,
        info: <svg width="512px" height="512px" viewBox="0 0 45.395 45.395" role="icon">
            <path d="M22.683,16.977c-2.028,0-3.465,1.646-3.465,3.672v12.485c0,2.028,1.437,3.671,3.465,3.671    c2.027,0,3.463-1.643,3.463-3.671V20.649C26.146,18.621,24.71,16.977,22.683,16.977z" fill="#FFFFFF"/>
            <path d="M22.698,7.432c-2.095,0-3.795,1.699-3.795,3.795c0,2.095,1.7,3.793,3.795,3.793c2.093,0,3.793-1.698,3.793-3.793    C26.491,9.131,24.791,7.432,22.698,7.432z" fill="#FFFFFF"/>
            <path d="M22.698,0C10.181,0,0,10.183,0,22.697c0,12.516,10.182,22.697,22.698,22.697c12.516,0,22.696-10.183,22.696-22.697    S35.214,0,22.698,0z M22.698,40.447c-9.787,0-17.749-7.963-17.749-17.75c0-9.787,7.962-17.749,17.749-17.749    c9.786,0,17.747,7.962,17.747,17.749C40.445,32.484,32.484,40.447,22.698,40.447z" fill="#FFFFFF"/>
        </svg>,
        link: <svg fill="#000000" viewBox="0 0 24 24" width="96px" height="96px" role="icon">
            <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z" fill="white"/>
        </svg>,
        mail: <svg width="512px" height="512px" viewBox="0 0 485.211 485.211" role="icon">
            <path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584   c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651   c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729   c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911   c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602   c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z" fill="#FFFFFF"/>
        </svg>,
        onOff: <svg viewBox="0 0 512 512" width="512px" height="512px" role="icon">
            <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M232.727,116.364    c0-12.853,10.42-23.273,23.273-23.273c12.853,0,23.273,10.42,23.273,23.273v99.739c0,12.853-10.42,23.273-23.273,23.273    c-12.853,0-23.273-10.42-23.273-23.273V116.364z M256,418.909c-81.579,0-147.948-66.369-147.948-147.948    c0-36.346,13.309-71.297,37.474-98.413c8.552-9.598,23.262-10.44,32.859-1.89c9.596,8.552,10.44,23.262,1.89,32.86    c-16.558,18.579-25.678,42.53-25.678,67.443c0,55.913,45.489,101.402,101.402,101.402s101.402-45.489,101.402-101.402    c0-24.916-9.118-48.867-25.676-67.443c-8.554-9.595-7.708-24.306,1.888-32.858c9.593-8.552,24.306-7.709,32.858,1.888    c24.166,27.113,37.475,62.062,37.475,98.413C403.948,352.54,337.579,418.909,256,418.909z" fill="#FFFFFF"/>
        </svg>,
        password: <svg viewBox="0 0 490.4 490.4" width="512px" height="512px" role="icon">
            <path d="M99.15,147.2v51.2h-3.4c-21.5,0-38.9,17.4-38.9,38.9v214.2c0,21.5,17.4,38.9,38.9,38.9h298.9c21.5,0,38.9-17.4,38.9-38.9   V237.3c0-21.5-17.4-38.9-38.9-38.9h-1v-51.2c0-81.2-66-147.2-147.2-147.2C165.15,0,99.15,66.1,99.15,147.2z M268.15,354   c-3,2.2-3.8,4.4-3.8,7.8c0.1,15.7,0.1,31.4,0.1,47.1l0,0c0.3,6.5-3,12.9-8.8,15.9c-13.8,7-27.5-2.8-27.5-15.8v-0.1   c0-15.8,0-31.5,0.1-47.3c0-3.2-0.7-5.3-3.5-7.4c-14.3-10.5-18.9-28.4-11.8-44.2c6.9-15.4,23.8-24.3,39.8-21.1   c17.7,3.6,30.1,17.9,30.2,35.6C283.05,336.7,278.05,346.8,268.15,354z M163.55,147.2c0-45.7,37.2-82.8,82.8-82.8   c45.7,0,82.8,37.2,82.8,82.8v51.2h-165.6V147.2z" fill="#ffffff"/>
        </svg>,
        rankings: <svg viewBox="0 0 504.123 504.123" width="512px" height="512px" role="icon">
            <path fill="#61BFAF" d="M504.123,133.908h-6.302l-103.975,49.625v170.929l110.277-55.926  C504.123,298.535,504.123,133.908,504.123,133.908z" />
            <path fill="#37A18E" d="M393.846,183.532l-103.975-49.625h-6.302v164.628l110.277,55.926V183.532z"/>
            <path fill="#3DB39E" d="M283.569,133.908L393.846,78.77l110.277,55.138l-110.277,55.138L283.569,133.908z"/>
            <path fill="#E5766D" d="M362.338,55.138h-6.302l-103.975,49.625v324.529l110.277-55.926V55.138z"/>
            <path fill="#CB4E44" d="M252.062,104.763L148.086,55.138h-6.302v318.228l110.277,55.926  C252.062,429.292,252.062,104.763,252.062,104.763z"/>
            <path fill="#E2574C" d="M141.785,55.138L252.062,0l110.277,55.138l-110.277,55.138L141.785,55.138z"/>
            <path fill="#EFCF7B" d="M220.554,189.046h-6.302l-103.975,49.625v265.452l110.277-55.926V189.046z"/>
            <path fill="#D7B354" d="M110.277,238.671L6.302,189.046H0v259.151l110.277,55.926V238.671z"/>
            <path fill="#EFC75E" d="M0,189.046l110.277-55.138l110.277,55.138l-110.277,55.138L0,189.046z"/>
        </svg>,
        search: <svg width="512px" height="512px" viewBox="0 0 30.239 30.239" role="icon">
            <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735   c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0   c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z    M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0   C21.517,9.026,21.517,14.63,18.073,18.074z" fill="#ffffff"/>
        </svg>,
        settings: <svg viewBox="0 0 512 512" width="512px" height="512px" role="icon">
            <path d="M256,181c-33.091,0-60,26.909-60,60s26.909,60,60,60s60-26.909,60-60S289.091,181,256,181z" fill="#FFFFFF"/>
            <path d="M499.461,211.205l-39.848-6.475c-4.995-19.893-12.847-38.789-23.408-56.411l22.91-32.095    c4.263-5.962,3.589-14.136-1.597-19.321l-42.422-42.422c-5.215-5.2-13.374-5.889-19.321-1.597l-32.095,22.91    c-17.622-10.562-36.519-18.413-56.411-23.408l-6.475-39.848C299.594,5.303,293.339,0,286,0h-60    c-7.339,0-13.594,5.303-14.795,12.539l-6.475,39.848c-19.893,4.995-38.789,12.847-56.411,23.408l-32.095-22.91    c-5.962-4.292-14.15-3.604-19.321,1.597L54.481,96.903c-5.186,5.186-5.859,13.359-1.597,19.321l22.91,32.095    c-10.562,17.622-18.413,36.519-23.408,56.411l-39.848,6.475C5.303,212.406,0,218.661,0,226v60c0,7.339,5.303,13.594,12.539,14.795    l39.848,6.475c4.995,19.893,12.847,38.789,23.408,56.411l-22.91,32.095c-4.263,5.962-3.589,14.136,1.597,19.321l42.422,42.422    c5.171,5.171,13.359,5.83,19.321,1.597l32.095-22.91c17.622,10.562,36.519,18.413,56.411,23.408l6.475,39.848    C212.406,506.697,218.661,512,226,512h60c7.339,0,13.594-5.303,14.795-12.539l6.475-39.848    c19.893-4.995,38.789-12.847,56.411-23.408l32.095,22.91c5.947,4.233,14.106,3.574,19.321-1.597l42.422-42.422    c5.186-5.186,5.859-13.359,1.597-19.321l-22.91-32.095c10.562-17.622,18.413-36.519,23.408-56.411l39.848-6.475    C506.697,299.594,512,293.339,512,286v-60C512,218.661,506.697,212.406,499.461,211.205z M256,421c-90.981,0-165-74.019-165-165    S165.019,91,256,91s165,74.019,165,165S346.981,421,256,421z" fill="#FFFFFF"/>
            <path d="M325.29,297.732C308.773,317.866,284.017,331,256,331c-28.017,0-52.773-13.134-69.291-33.268    c-14.379,12.744-24.868,29.451-30.654,48.197C180.784,373.387,216.224,391,256,391s75.216-17.613,99.944-45.071    C350.158,327.183,339.67,310.476,325.29,297.732z" fill="#FFFFFF"/>
        </svg>,
        toggleArrow: <svg viewBox="0 0 415.346 415.346" width="512px" height="512px" role="icon">
            <path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697    c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z" fill="#E7E7E7"/>
        </svg>,
        user: <svg viewBox="0 0 490 490" width="512px" height="512px" role="icon">
            <path d="M0,245c0,135.1,109.9,245,245,245s245-109.9,245-245S380.1,0,245,0S0,109.9,0,245z M245,41.6   c112.2,0,203.4,91.2,203.4,203.4c0,50.4-18.5,96.5-48.9,132.1c-42-32.2-83.8-53.4-93-57.8c-1.1-0.6-1.8-1.7-1.8-3   c0-4.8,0-17.3,0-30.5c4.5-9.4,7.3-19.5,8.9-28.6c4.1,2.8,10.9,1.3,18.4-25.1c6.1-21.5,2.4-28.7-2.9-30.5c17.1-81.9-22-84.6-22-84.6   s-5.9-11.3-21.4-19.9c-10.4-6.2-24.9-10.9-44-9.3c-6.2,0.3-12,1.5-17.5,3.3l0,0c-7,2.4-13.4,5.8-19.3,9.9   c-7.1,4.5-13.9,10.1-19.8,16.4c-9.4,9.6-17.8,22.1-21.4,37.6c-3.5,13.2-3.4,27.4,1.8,41.9c-7-0.7-15.3,3.4-7.5,31   c5.7,20.2,11,25.8,15,26.1c1.8,11.5,5.4,24.4,12.3,36v26.4c0,1.3-0.7,2.4-1.8,3c-9.1,4.5-51,25.6-93,57.8   C60.1,341.5,41.6,295.4,41.6,245C41.6,132.8,132.8,41.6,245,41.6z" fill="#ffffff"/>
        </svg>
    };

    return icons[current as keyof Icons] || "";
};

export default Icon;