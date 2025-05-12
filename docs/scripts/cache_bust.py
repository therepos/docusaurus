import os
import random
import time

def append_cache_buster(config, **kwargs):
    bust = str(int(time.time()))
    site_dir = config['site_dir']
    for root, dirs, files in os.walk(site_dir):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                content = content.replace('.css', f'.css?v={bust}')
                content = content.replace('.js', f'.js?v={bust}')
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
