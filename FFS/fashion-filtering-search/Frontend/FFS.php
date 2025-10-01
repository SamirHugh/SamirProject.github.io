<!--Author: Samir Robinson-Hugh-->

<?php
include 'style_paths.php'; # This connects the functionality of the PHP to the paths

# Here in the code its the filters in which assigns buttons to their buttons

$gender = $_POST['gender'] ?? '';
$season = $_POST['season'] ?? '';
$style = $_POST['style'] ?? '';
$color = $_POST['clothingColor'] ?? '';
$types = explode(',', $_POST['clothingTypes'] ?? []);

$galleryImages = [];
$usedImages = [];

function normalize($value) {
    return ucwords(trim(str_replace(['.', '_'], [' ', ' '], $value))); 
}

function buildKey($season, $style, $type, $color) {
    return "{$season}, {$style}, {$type}, {$color}";
}

foreach ($types as $type) {
    $type = normalize($type);
    $seasonNorm = normalize($season);
    $styleNorm = normalize($style);
    $colorFull = normalize($color) . " Tones";

    $key = buildKey($seasonNorm, $styleNorm, $type, $colorFull);


    # This is here in the case that if an image doesnt work
    if (isset($stylePaths[$gender][$key]) && !empty($stylePaths[$gender][$key])) {
        $img = $stylePaths[$gender][$key][array_rand($stylePaths[$gender][$key])];
        if (!in_array($img, $usedImages)) {
            $galleryImages[] = $img;
            $usedImages[] = $img;
        }
    } else {
        // Fallback: Try same combo but different color tone
        foreach (["Cool Tones", "Warm Tones", "Neutral Tones"] as $altTone) {
            if ($altTone === $colorFull) continue;
            $fallbackKey = buildKey($seasonNorm, $styleNorm, $type, $altTone);
            if (isset($stylePaths[$gender][$fallbackKey]) && !empty($stylePaths[$gender][$fallbackKey])) {
                $img = $stylePaths[$gender][$fallbackKey][array_rand($stylePaths[$gender][$fallbackKey])];
                if (!in_array($img, $usedImages)) {
                    $galleryImages[] = $img;
                    $usedImages[] = $img;
                }
                break;
            }
        }
    }
}
?>


<!DOCTYPE html> <!-- The code here needs to be fix there needs to be more of a look to the results page to complete the site -->
<html>
<head>
  <title>Your Style Gallery</title>
  <style>
    body {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: 50px;
      background-color: #f4f4f4;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    .gallery img {
      max-width: 300px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    .gallery img:hover {
      transform: scale(1.05);
    }
    .restart-btn {
      display: inline-block;
      margin-top: 40px;
      padding: 12px 25px;
      background-color: #8E0101;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .restart-btn:hover {
      background-color: #aa2a2a;
    }
  </style>
</head>
<body>
  <h1>Your Style Gallery</h1>
  <div class="gallery">
    <?php if (!empty($galleryImages)): ?>
      <?php foreach ($galleryImages as $img): ?>
        <a href="<?php echo $img; ?>" target="_blank">
          <img src="<?php echo $img; ?>" alt="style suggestion" onerror="this.style.display='none'">
        </a>
      <?php endforeach; ?>
    <?php else: ?>
      <p>No style suggestions available for the selected preferences.</p> 
    <?php endif; ?>
  </div>

  
  <a href="FFS.html" class="restart-btn">Restart Quiz</a>
</body>
</html>
